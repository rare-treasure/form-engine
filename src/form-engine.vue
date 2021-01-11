<template>
  <el-form
    class="form-engine"
    v-bind="$attrs"
    v-on="$listeners"
    :size="size"
    :rules="newRules"
    :model="formData"
    ref="form">
    <el-row>
      <template v-for="(item, idx) of items">
        <el-col :key="idx" :span="item.span || 12">
          <el-form-item
            v-if="!item.formSlot"
            :size="size"
            :label-width="item.labelWidth || labelWidth"
            :label="item.label"
            :style="{ width: item.width || width || '' + 'px' }"
            :prop="item.prop"
            v-bind="item.props"
            v-on="item.on"
          >
            <slot v-if="item.slot" :name="item.prop"></slot>
            <template v-else>
              <component
                v-bind="item.subProps"
                v-on="item.subOn"
                :size="item.size || size"
                :placeholder="getPlaceholder(item)"
                v-if="getComponentName(item.type)"
                :is="getComponentName(item.type)"
                v-model="formData[item.prop]"
              >
                <template v-if="item.type === 'select'">
                  <el-option
                    v-for="(subItem, idx) of item.options || []"
                    :key="idx"
                    :disabled="subItem.disabled"
                    :value="subItem.value"
                    :label="subItem.label"
                  ></el-option>
                </template>
              </component>
              <span
                v-bind="item.subProps"
                v-on="item.subOn"
                v-else-if="item.type === 'text'"
              >
                {{ formData[item.prop] }}
              </span>
            </template>
          </el-form-item>
          <slot v-else-if="item.prop" :name="item.prop"></slot>
        </el-col>
      </template>
      <slot></slot>
    </el-row>
    <slot name="independent"></slot>
  </el-form>
</template>

<script lang="ts">
import {
  Component, Vue, Watch, Prop
} from 'vue-property-decorator'
import {
  FormItem, Button, Input, DatePicker, Select, Form
} from 'element-ui'

type Item = {
  span: number
  labelWidth: string
  width: number & string
  prop: string
  formSlot: boolean
  slot: boolean
  type: string
  label: string
  props: FormItem
  on: Record<string, () => void>
  placeholder: string
  size: string
  subProps: Select | DatePicker | Input | Button
  subOn: Record<string, () => void>
};

@Component
export default class FormEngine extends Vue {
  name = 'form-engine';

  @Prop({
    type: Array,
    default: () => []
  })
  items!: Item[];

  @Prop({
    type: String,
    default: 'small'
  })
  size: any;

  @Prop({
    type: Object,
    default: () => ({})
  })
  rules: any;

  @Prop({
    type: String,
    default: '80px'
  })
  labelWidth?: string;

  @Prop({
    type: String
  })
  width?: string;

  @Prop({
    type: Object,
    default: () => ({})
  })
  data: any;

  @Watch('config')
  watchConfig() {
    this.init()
  }

  @Watch('data')
  watchData() {
    Object.keys(this.data).forEach((key: string) => {
      this.formData[key] = this.data[key]
    })
  }

  formData: {
    [key: string]: any
  } = {};

  newRules = {};

  $refs!: {
    form: Form
  };

  created() {
    this.init()
  }

  getComponentName(type: string) {
    let name = ''

    const checkType = (type = '', nowType = '') => type.indexOf(nowType) > -1

    if (!type || type === 'input' || type === 'textarea') {
      name = 'el-input'
    } else if (type === 'select') {
      name = 'el-select'
    } else if (checkType(type, 'date')) {
      name = 'el-date-picker'
    } else if (type === 'button') {
      name = 'el-button'
    }

    return name
  }

  getPlaceholder(item: Item) {
    const text = item.type === 'select' || item.type === 'input' ? `请${item.type === 'select' ? '选择' : '输入'}` : ''
    const subProps = (item?.subProps || {}) as {
      disabled: boolean
      readonly: boolean
    }

    return item.placeholder || (subProps?.disabled || subProps?.readonly || !text ? '' : `${text + item.label}`)
  }

  init() {
    this.newRules = this.rules

    this.formData = this.data

    this.items.forEach((item: any) => {
      if (!this.formData[item.prop] && !item.slot) {
        this.$set(this.formData, item.prop, '')
      }
    })

    this.newRules = {
      ...this.rules,
      ...this.items
        .filter((item: any) => item.rules)
        .reduce(
          (prev: any, now: any) => ({
            ...prev,
            [now.prop]: now.rules
          }),
          {}
        )
    }

    this.$nextTick(() => {
      this.clearValidate()
    })
  }

  clearValidate() {
    this.$refs.form.clearValidate()
  }

  resetFields() {
    this.$refs.form.resetFields()
  }

  validate() {
    return this.$refs.form.validate().then(() => Promise.resolve(this.formData))
  }
}
</script>
