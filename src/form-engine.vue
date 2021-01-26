<template>
  <el-form
    class="form-engine"
    v-bind="$attrs"
    v-on="$listeners"
    :rules="newRules"
    :model="newFormData"
    ref="form">
    <el-row v-bind="rowProps" v-on="rowOn">
      <template v-for="item of items">
        <el-col
          :key="item.prop"
          v-bind="colProps || item.colProps"
          v-on="colOn || item.colOn">
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
              :items="items"
              :form-data="newFormData">
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
                v-bind="item.compProps"
                v-on="item.compOn"
                v-else
              >
                {{ newFormData[item.prop] }}
              </span>
            </template>
          </el-form-item>
          <slot
            v-else-if="item.prop"
            :item="item"
            :value="newFormData[item.prop]"
            :rule="newRules[item.prop]"
            :items="items"
            :form-data="newFormData"
            :rules="newRules"
            :name="item.prop">
          </slot>
        </el-col>
        <el-col
          v-if="item.row && item.span && item.span < 24"
          :key="item.prop"
          :span="24 - item.span">
        </el-col>
      </template>
      <slot :items="items" :form-data="newFormData" :rules="newRules"></slot>
    </el-row>
    <slot name="independent" :items="items" :form-data="newFormData" :rules="newRules"></slot>
  </el-form>
</template>

<script lang="ts">
import {
  Component, Vue, Watch, Prop
} from 'vue-property-decorator'
import {
  FormItem, Button, Input, DatePicker, Select, Form, Col, Row
} from 'element-ui'
import { isEqual, merge } from 'lodash'

type Item = {
  span: number
  row: number
  prop: string
  formSlot: boolean
  required: boolean
  slot: boolean
  rules: Record<string, unknown>[] | Record<string, unknown>
  label: string
  placeholder: string
  type: string
  options: {
    label?: string
    value: string | number
  }[]
  props: FormItem
  on: Record<string, () => void> | HTMLElementEventMap
  colProps: Col
  colOn: Record<string, () => void> | HTMLElementEventMap
  compProps: Select | DatePicker | Input | Button
  compOn: Record<string, () => void> | HTMLElementEventMap
}

@Component
export default class FormEngine extends Vue {
  @Prop({
    type: Array,
    default: () => []
  })
  items!: Item[];

  @Prop({
    type: Object,
    default: () => ({})
  })
  rules!: {
    [key: string]: any
  };

  @Prop({
    type: Object,
    default: () => ({})
  })
  formData!: {
    [key: string]: any
  };

  @Prop({
    type: Object,
    default: () => ({})
  })
  rowProps!: Row;

  @Prop({
    type: Object,
    default: () => ({})
  })
  rowOn!: Record<string, () => void> | HTMLElementEventMap

  @Prop({
    type: Object,
    default: () => ({})
  })
  colProps!: Col;

  @Prop({
    type: Object,
    default: () => ({})
  })
  colOn!: Record<string, () => void> | HTMLElementEventMap

  @Watch('items', {
    deep: true
  })
  @Watch('rules', {
    deep: true
  })
  watchItemsRules() {
    this.initFormData()
    this.handleRules()
  }

  @Watch('formData', {
    deep: true
  })
  watchFormData() {
    // 同步最新数据
    if (isEqual(this.newFormData, this.formData)) {
      return
    }

    this.newFormData = this.formData
    this.initFormData()
  }

  newFormData: {
    [key: string]: any
  } = {};

  newRules: {
    [key: string]: any
  } = {};

  $refs!: {
    form: Form
  };

  created() {
    this.init()
  }

  getComponentName(type: string) {
    let cName = ''

    const checkType = (type = '', nowType = '') => type.indexOf(nowType) > -1

    if (!type || type === 'input' || type === 'textarea') {
      cName = 'el-input'
    } else if (type === 'select' || type === 'time-select') {
      cName = `el-${type}`
    } else if (type === 'time') {
      cName = 'el-time-picker'
    } else if (checkType(type, 'date')) {
      cName = 'el-date-picker'
    } else if (type === 'button' || type === 'button-text') {
      cName = 'el-button'
    }

    return cName
  }

  getPlaceholder(item: Item) {
    const cName = this.getComponentName(item.type)
    const text = /(input|select)$/.test(cName) ? `请${item.type === 'select' ? '选择' : '输入'}` : ''
    const compProps = (item?.compProps || {}) as {
      disabled: boolean
      readonly: boolean
    }

    return item.placeholder || (compProps?.disabled || compProps?.readonly || !text ? '' : `${text + item.label}`)
  }

  init() {
    this.newFormData = this.formData
    this.newRules = this.rules

    this.initFormData()
    this.handleRules()
  }

  initFormData() {
    // 当不存在值时，设置一个默认值
    this.items.forEach((item: Item) => {
      if (item.prop && !this.formData[item.prop]) {
        this.$set(this.newFormData, item.prop, '')
      }
    })
  }

  handleRules() {
    this.items.forEach((item: Item) => {
      let tmpRules: Record<string, unknown>[] = []

      // 当存在required 时，自动添加required验证
      if (item.required) {
        const rules = this.newRules[item.prop] || []
        const isExist = rules.find((rule: Record<string, unknown>) => rule.required)

        if (!isExist) {
          let message = ''
          let trigger = 'blur'

          if ((item.type === 'input' || item.type === 'textarea' || !item.type)) {
            message = `请输入${item.label}`
          } else if (item.type !== 'button' && item.type !== 'text') {
            message = `请选择${item.label}`
            trigger = 'change'
          }

          const requiredRules = message ? [{
            required: true,
            message,
            trigger
          }] : []

          tmpRules = [
            ...requiredRules,
            ...rules
          ]

          if (tmpRules) {
            item.rules = tmpRules
          }
        }
      }
    })

    this.newRules = merge({}, this.rules, this.items
      .filter((item: any) => item.rules)
      .reduce(
        (prev: any, now: any) => ({
          ...prev,
          [now.prop]: now.rules
        }),
        {}
      ))

    // 改动rules，可能会触发表单验证
    this.$nextTick(() => {
      this.clearValidate()
    })
  }

  clearValidate(props: string[] | string = '') {
    if (this.$refs?.form) this.$refs.form.clearValidate(props)
  }

  resetFields() {
    if (this.$refs?.form) this.$refs.form.resetFields()
  }

  validateField(props: string[] | string, cb: (errorMessage: string) => void) {
    if (this.$refs?.form) this.$refs.form.validateField(props, cb)
  }

  validate(cb: (isValid: boolean, invalidFields: object, data: {
    [key: string]: any
  }) => void) {
    if (!cb) {
      return this.$refs.form.validate().then(() => Promise.resolve(this.newFormData))
    }
    return this.$refs.form.validate(
      (isValid, invalidFields) => cb(isValid, invalidFields, this.newFormData)
    )
  }
}
</script>

<style>
.form-engine .el-col .form-engine__item {
  width: 100%
}

.form-engine .el-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
