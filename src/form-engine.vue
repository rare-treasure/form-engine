<template>
  <el-form
    ref="form"
    class="form-engine"
    v-bind="$attrs"
    v-on="$listeners"
    :rules="newRules"
    :model="newFormData"
    :validate-on-rule-change="getAttrValue($attrs, 'validate-on-rule-change', isChangeValidateRule)"
    :disabled="disabled"
  >
    <el-row
      v-bind="getAttrValue($attrs, 'row-props', rowProps)"
    >
      <template v-for="(item, idx) of newItems">
        <el-col
          :key="item.prop"
          :span="item.span || span"
          v-bind="getAttrValue(item, 'col-props', getAttrValue(this, 'col-props', {}))"
        >
          <el-form-item
            v-if="!item.formSlot"
            :prop="item.prop"
            :label="item.label"
            :rules="item.rules"
            :ref="item.ref || item.prop"
            v-bind="getAttrValue(item, 'form-item-props', {})"
            v-on="getAttrValue(item, 'form-item-on', {})"
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
                class="form-engine__item"
                v-bind="getAttrValue(item, 'component-props', {})"
                v-on="getAttrValue(item, 'component-on', {})"
                v-model="newFormData[item.prop]"
                v-if="getComponentName(item.type)"
                :is="getComponentName(item.type)"
                :placeholder="getPlaceholder(item)"
                :type="item.type"
                :clearable="item.clearable || clearable"
                :disabled="item.disabled || disabled"
                :readonly="item.readonly"
              >
                <template v-if="item.type === 'select'">
                  <el-option
                    v-for="(subItem, idx) of item.options || []"
                    :ref="item.ref"
                    :key="idx"
                    :disabled="subItem.disabled"
                    :value="subItem.value"
                    :label="subItem.label"
                  ></el-option>
                </template>
              </component>
              <span
                v-bind="getAttrValue(item, 'comp-props', {})"
                v-on="getAttrValue(item, 'comp-on', {})" v-else>
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
            :validate="(cb) => validateField(item.prop, cb)"
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
        <el-col
          v-if="
            item.linefeed
            && (item.span || span)
            && (item.span || span) < 24
            && (item.span || span) > 0
          " :key="item.prop + 'linefeed'"
          :span="getLinefeedSpan(idx)">
        </el-col>
      </template>
      <slot :items="newItems" :form-data="newFormData" :rules="newRules"></slot>
    </el-row>
    <slot name="independent" :items="newItems" :form-data="newFormData" :rules="newRules"></slot>
  </el-form>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  [key: string]: any;
};

export type FormData = {
  [key: string]: any;
};

export type Item = {
  type: string;
  label: string;
  prop: string;
  span: number;
  rules: Rule | Rule[];
  slot: boolean;
  formSlot: boolean;
  placeholder: string;
  clearable: boolean;
  readonly: boolean;
  disabled: boolean;
  row: boolean;
  linefeed: boolean;
  required: boolean;
  requiredErrMsg: string;
  isHideEditPlaceholder: boolean;
  options: {
    label?: string;
    value: string | number;
    disabled?: boolean;
  }[];
  colProps: Col;
  formItemProps: Record<string, () => void>;
  formItemOn: Record<string, () => void>;
  componentProps: Record<string, any>;
  componentOn: Record<string, () => void>;
};

export type RowProps = Row;

export type ColProps = Col;

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
    default: true,
  })
  isHideEditPlaceholder!: boolean;

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
  colProps!: ColProps;

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
    console.log(dataSource?.[key] ?? dataSource?.[camelCase(key)] ?? defalutValue);
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
    const cProps = item?.componentProps;
    const isHideEditPlaceholder = item.isHideEditPlaceholder ?? this.isHideEditPlaceholder;

    // eslint-disable-next-line no-shadow
    const getText = (text: string) => (this.disabled
      || item.disabled
      || item.readonly
      || cProps?.disabled
      || cProps?.readonly
      ? ''
      : text);

    const placeholder = (item.componentProps || {}).placeholder || item.placeholder;

    return (isHideEditPlaceholder ? getText(placeholder) : placeholder)
      || getText(text + item.label);
  }

  getLinefeedSpan(idx: number) {
    const newItems = cloneDeep(this.newItems ?? []);
    let rowIdx = 0;

    for (let i = 0; i <= idx; i += 1) {
      if (newItems?.[i]?.row) {
        rowIdx = i;
      }
    }
    const list = cloneDeep(newItems?.splice(rowIdx, idx - rowIdx + 1) ?? []);

    const span = list.reduce((total: number, nowItems: Item) => total + (nowItems?.span || 24), 0);

    return 24 - (span % 24);
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

          if (/(input|autocomplete|input-number|textarea)$/.test(tmpItem.type) || !tmpItem.type) {
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
