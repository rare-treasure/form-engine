<template>
  <el-form
    class="form-engine"
    v-bind="$attrs"
    v-on="$listeners"
    :rules="newRules"
    :model="newFormData"
    ref="form"
    :validate-on-rule-change="getAttrValue($attrs, 'validate-on-rule-change', isChangeValidateRule)"
    :disabled="disabled"
  >
    <el-row v-bind="rowProps" v-on="rowOn">
      <template v-for="item of newItems">
        <el-col
          :key="item.prop"
          v-bind="colProps || item.colProps"
          v-on="colOn || item.colOn"
          :span="item.span || span"
        >
          <el-form-item
            v-if="!item.formSlot"
            :prop="item.prop"
            :label="item.label"
            :rules="item.rules"
            :ref="(item.props || {}).ref || item.prop"
            v-bind="item.props"
            v-on="item.on"
          >
            <slot
              v-if="item.slot"
              :name="item.prop"
              :item="item"
              :value="newFormData[item.prop]"
              :items="newItems"
              :form-data="newFormData"
            >
            </slot>
            <template v-else>
              <component
                v-bind="item.compProps"
                v-on="item.compOn"
                :placeholder="getPlaceholder(item)"
                :type="item.type"
                v-if="getComponentName(item.type)"
                :is="getComponentName(item.type)"
                v-model="newFormData[item.prop]"
                class="form-engine__item"
                :clearable="getAttrValue(item.compProps, 'clearable', item.clearable || clearable)"
                :disabled="getAttrValue(item.compProps, 'disabled', item.disabled || disabled)"
                :readonly="getAttrValue(item.compProps, 'readonly', item.readonly)"
              >
                <template v-if="item.type === 'select'">
                  <el-option
                    v-for="(subItem, idx) of item.options || []"
                    :key="idx"
                    :disabled="subItem.disabled"
                    :value="subItem.value"
                    :label="subItem.label"
                    v-bind="subItem"
                  ></el-option>
                </template>
              </component>
              <span v-bind="item.compProps" v-on="item.compOn" v-else>
                {{ newFormData[item.prop] }}
              </span>
            </template>
          </el-form-item>
          <slot
            v-else-if="item.prop"
            :item="item"
            :value="newFormData[item.prop]"
            :rule="item.rules"
            :items="newItems"
            :form-data="newFormData"
            :rules="newRules"
            :name="item.prop"
          >
          </slot>
        </el-col>
        <el-col
          v-if="
            item.row && (item.span || span) && (item.span || span) < 24 && (item.span || span) > 0
          "
          :key="item.prop + '__row'"
          :span="24 - (item.span || span)"
        >
        </el-col>
      </template>
      <slot :items="newItems" :form-data="newFormData" :rules="newRules"></slot>
    </el-row>
    <slot name="independent" :items="newItems" :form-data="newFormData" :rules="newRules"></slot>
  </el-form>
</template>

<script lang="ts">
import {
  Component, Vue, Watch, Prop,
} from 'vue-property-decorator';
import {
  Form, FormItem, Row, Col,
} from 'element-ui';
import {
  camelCase, cloneDeep, isEqual, merge,
} from 'lodash';
import { ValidateCallback, ValidateFieldCallback } from 'element-ui/types/form.d';

export type Rule = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type FormData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type Item = {
  span: number;
  row: number;
  prop: string;
  formSlot: boolean;
  required: boolean;
  requiredErrMsg: string;
  slot: boolean;
  rules: Rule | Rule[];
  label: string;
  placeholder: string;
  type: string;
  options: {
    label?: string;
    value: string | number;
  }[];
  clearable: boolean;
  readonly: boolean;
  disabled: boolean;
  notEditHidePlaceholder: boolean;
  props: FormItem;
  on: Record<string, () => void> | HTMLElementEventMap;
  colProps: Col;
  colOn: Record<string, () => void> | HTMLElementEventMap;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compProps: Record<string, any>;
  compOn: Record<string, () => void> | HTMLElementEventMap;
};

export type RowProps = Row;

export type ColProps = Col;

export type On = Record<string, () => void> | HTMLElementEventMap;

@Component
export default class FormEngine extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  items!: Item[];

  @Prop({
    type: Number,
    default: 24,
  })
  span!: number;

  @Prop({
    type: Boolean,
    default: false,
  })
  notEditHidePlaceholder!: boolean;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  rules!: Rule;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  formData!: FormData;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  rowProps!: RowProps;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  rowOn!: On;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  colProps!: ColProps;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  colOn!: On;

  @Prop(Boolean)
  disabled!: boolean;

  @Prop(Boolean)
  clearable!: boolean;

  @Watch('items', {
    deep: true,
  })
  watchItems() {
    // 在原有数据中, 进行新增rules, data的数据;
    this.handleFormData();
    this.handleRules();
  }

  @Watch('rules', {
    deep: true,
  })
  watchRules() {
    // 依据最新数据直接重置rules
    this.handleRules(true);
  }

  @Watch('formData', {
    deep: true,
  })
  watchFormData() {
    // 同步最新数据
    if (isEqual(this.newFormData, this.formData)) {
      return;
    }

    this.handleFormData(true);
  }

  newFormData: FormData = {};

  newRules: Rule = {};

  newItems: Item[] = [];

  $refs!: {
    form: Form;
  };

  isChangeValidateRule = false;

  created() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  getAttrValue(dataSource: any = {}, key: string, defalutValue: any) {
    return dataSource?.[key] ?? dataSource?.[camelCase(key)] ?? defalutValue;
  }

  // eslint-disable-next-line class-methods-use-this
  getComponentName(type: string) {
    let cName = '';

    // eslint-disable-next-line no-shadow
    const checkType = (type = '', nowType = '') => type.indexOf(nowType) > -1;

    if (!type || type === 'input' || type === 'textarea') {
      cName = 'el-input';
    } else if (type === 'time') {
      cName = 'el-time-picker';
    } else if (checkType(type, 'date')) {
      cName = 'el-date-picker';
    } else if (type && type !== 'text') {
      cName = `el-${type}`;
    }

    return cName;
  }

  getPlaceholder(item: Item) {
    const cName = this.getComponentName(item.type);
    const text = /(input|select|autocomplete)$/.test(cName)
      ? `请${item.type === 'select' ? '选择' : '输入'}`
      : '';
    const compProps = (item?.compProps || {}) as {
      disabled: boolean;
      readonly: boolean;
    };
    const hidePlaceholder = item.notEditHidePlaceholder || this.notEditHidePlaceholder;

    // eslint-disable-next-line no-shadow
    const getText = (text: string) => (this.disabled
      || item.disabled
      || item.readonly
      || compProps?.disabled
      || compProps?.readonly
      ? ''
      : text);

    const placeholder = (item.compProps || {}).placeholder || item.placeholder;

    return (hidePlaceholder ? getText(placeholder) : placeholder) || getText(text + item.label);
  }

  init() {
    this.handleFormData(true);
    this.handleRules(true);
  }

  handleFormData(isInit?: boolean) {
    if (isInit) {
      this.newFormData = this.formData;
    }

    // 当不存在值时，设置一个默认值
    this.items.forEach((item: Item) => {
      if (
        item.prop
        && !this.formData[item.prop]
        && this.formData[item.prop] !== 0
        && this.formData[item.prop] !== false
      ) {
        this.$set(this.newFormData, item.prop, '');
      }
    });
  }

  handleRules(isInit?: boolean) {
    this.isChangeValidateRule = false;
    if (isInit) {
      this.newRules = this.rules;
    }
    const items: Item[] = [];

    this.items.forEach((item: Item) => {
      let tmpRules: Rule[] = [];
      let requiredRules: Rule[] = [];
      const tmpItem = cloneDeep(item);

      const rules: Rule[] = this.newRules[tmpItem.prop] || [];

      // 当存在required 时，自动添加required验证
      if (tmpItem.required) {
        const isExist = rules.find((rule: Rule) => rule.required);

        if (!isExist) {
          let message = '';
          let trigger = 'blur';

          if (/(input|autocomplete|input-number)$/.test(tmpItem.type) || !tmpItem.type) {
            message = `请输入${tmpItem.label}`;
          } else if (tmpItem.type !== 'button' && tmpItem.type !== 'text') {
            message = `请选择${tmpItem.label}`;
            trigger = 'change';
          }

          if (tmpItem.requiredErrMsg) {
            message = tmpItem.requiredErrMsg;
          }

          if (tmpItem.type === 'autocomplete') {
            trigger = 'change';
          }

          requiredRules = message
            ? [
              {
                required: true,
                message,
                trigger,
              },
            ]
            : [];
        }
      }

      tmpRules = [
        ...requiredRules,
        // eslint-disable-next-line no-nested-ternary
        ...(Array.isArray(tmpItem.rules) ? tmpItem.rules : tmpItem.rules ? [tmpItem.rules] : []),
        ...rules,
      ];

      if (tmpRules.length) {
        tmpItem.rules = tmpRules;
      }

      items.push(tmpItem);
    });

    this.newRules = merge(
      {},
      this.rules,
      items
        .filter((item: Item) => item.rules)
        .reduce(
          (
            prev: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              [key: string]: any;
            },
            now: Item,
          ) => ({
            ...prev,
            [now.prop]: now.rules,
          }),
          {},
        ) as Rule,
    );

    this.newItems = items;

    // 改动rules，可能会触发表单验证
    this.$nextTick(() => {
      if (this.isChangeValidateRule) {
        this.clearValidate();
      }

      this.isChangeValidateRule = true;
    });
  }

  clearValidate(props?: string[] | string) {
    if (this.$refs?.form) this.$refs.form.clearValidate(props);
  }

  resetFields() {
    if (this.$refs?.form) this.$refs.form.resetFields();
  }

  validateField(props: string[] | string, cb?: ValidateFieldCallback) {
    if (this.$refs?.form) this.$refs.form.validateField(props, cb);
  }

  validate(cb?: ValidateCallback) {
    let promise: Promise<FormData> = new Promise((resolve) => {
      resolve(this.newFormData);
    });

    if (!cb) {
      promise = this.$refs.form.validate().then(() => Promise.resolve(this.newFormData));
    } else {
      this.$refs.form.validate((isValid, invalidFields) => cb(isValid, invalidFields));
    }

    return promise;
  }
}
</script>

<style>
.form-engine .el-col .form-engine__item {
  width: 100%;
}

.form-engine .el-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
