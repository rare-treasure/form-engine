<template>
  <el-form class="form-engine" :size="size" :rules="newRules" :model="formData" ref="form">
    <el-row>
      <template v-for="(item, idx) of items">
        <el-col :key="idx" :span="item.span || 12">
          <el-form-item
            :size="size"
            :label-width="item.labelWidth || labelWidth"
            :label="item.label"
            :style="{ width: item.width || (much ? width : '') + 'px' }"
            :prop="item.prop"
          >
            <slot v-if="item.slot" :name="item.prop"></slot>
            <template v-else>
              <el-input
                v-if="!item.type || item.type === 'input' || item.type === 'textarea'"
                :type="item.type"
                :size="item.size || size"
                :readonly="item.readonly"
                :disabled="item.disabled"
                :placeholder="
                  item.placeholder || (item.disabled || item.readonly ? '' : '请输入' + item.label)
                "
                v-model="formData[item.prop]"
                :clearable="item.clearable"
                :maxlength="item.maxlength"
                :rows="item.rows"
              ></el-input>
              <div v-if="item.type === 'textarea' && item.maxlength" class="text-limit">
                {{ formData[item.prop].length }}/{{ item.maxlength }}
              </div>
              <el-date-picker
                :size="item.size || size"
                v-if="checkType(item.type, 'date')"
                :type="item.type"
                :clearable="item.clearable"
                :readonly="item.readonly"
                :disabled="item.disabled"
                :value-format="item.valueFormat || 'yyyy-MM-dd'"
                :range-separator="item.rangeSeparator || '至'"
                :start-placeholder="item.startPlaceholder || '开始日期'"
                :end-placeholder="item.endPlaceholder || '结束日期'"
                v-model="formData[item.prop]"
              >
              </el-date-picker>
              <el-select
                v-if="item.type === 'select'"
                :size="item.size || size"
                :placeholder="
                  item.placeholder || (item.disabled || item.readonly ? '' : '请选择' + item.label)
                "
                :clearable="item.clearable"
                :disabled="item.disabled || item.readonly"
                v-model="formData[item.prop]"
                :multiple="item.multiple"
                :class="{ 'select-only': item.readonly }"
              >
                <el-option
                  v-for="(subItem, idx) of item.options || []"
                  :key="idx"
                  :disabled="subItem.disabled"
                  :value="subItem.value"
                  :label="subItem.label"
                ></el-option>
              </el-select>
              <el-button v-if="item.type === 'button'" @click="item.click">{{
                item.text
              }}</el-button>
              <span v-if="item.type === 'text'">
                {{ formData[item.prop] }}
              </span>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>

    <slot></slot>
  </el-form>
</template>

<script lang="ts">
import {
  Component, Vue, Watch, Prop
} from 'vue-property-decorator'
import { Form } from 'element-ui'

@Component
export default class FormEngine extends Vue {
  name = 'form-engine';

  @Prop({
    type: Array,
    default: () => []
  })
  items: any;

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

  checkType(type = '', nowType = '') {
    return type.indexOf(nowType) > -1
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
