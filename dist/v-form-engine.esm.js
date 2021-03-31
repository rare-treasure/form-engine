import Vue$1 from"vue";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.for-each.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.object.get-own-property-descriptor.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.symbol.iterator.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.function.name.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.reflect.construct.js";import"core-js/modules/es.object.get-prototype-of.js";import _merge from"lodash/merge";import _isEqual from"lodash/isEqual";import _cloneDeep from"lodash/cloneDeep";import _camelCase from"lodash/camelCase";import{Prop,Watch,Component,Vue}from"vue-property-decorator";import __vue_normalize__ from"vue-runtime-helpers/dist/normalize-component.mjs";import __vue_create_injector__ from"vue-runtime-helpers/dist/inject-style/browser.mjs";function _defineProperty$1(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty$1(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _toConsumableArray(arr){return function(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function __decorate(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}var FormEngine=function(_Vue){!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(FormEngine,Vue);var Constructor,protoProps,staticProps,_super=_createSuper(FormEngine);function FormEngine(){var _this;return _classCallCheck(this,FormEngine),(_this=_super.apply(this,arguments)).newFormData={},_this.newRules={},_this.newItems=[],_this.isChangeValidateRule=!1,_this}return Constructor=FormEngine,(protoProps=[{key:"watchItems",value:function(){this.handleFormData(),this.handleRules()}},{key:"watchRules",value:function(){this.handleRules(!0)}},{key:"watchFormData",value:function(){_isEqual(this.newFormData,this.formData)||this.handleFormData(!0)}},{key:"created",value:function(){this.init()}},{key:"getAttrValue",value:function(){var _ref,_dataSource$key,dataSource=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},key=arguments.length>1?arguments[1]:void 0,defalutValue=arguments.length>2?arguments[2]:void 0;return null!==(_ref=null!==(_dataSource$key=null==dataSource?void 0:dataSource[key])&&void 0!==_dataSource$key?_dataSource$key:null==dataSource?void 0:dataSource[_camelCase(key)])&&void 0!==_ref?_ref:defalutValue}},{key:"getComponentName",value:function(type){var cName="";return type&&"input"!==type&&"textarea"!==type?"time"===type?cName="el-time-picker":function(){var type=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",nowType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return type.indexOf(nowType)>-1}(type,"date")?cName="el-date-picker":type&&"text"!==type&&(cName="el-".concat(type)):cName="el-input",cName}},{key:"getPlaceholder",value:function(item){var _this2=this,cName=this.getComponentName(item.type),text=/(input|select|autocomplete)$/.test(cName)?"请".concat("select"===item.type?"选择":"输入"):"",compProps=(null==item?void 0:item.compProps)||{},getText=function(text){return _this2.disabled||item.disabled||item.readonly||null!=compProps&&compProps.disabled||null!=compProps&&compProps.readonly?"":text},placeholder=(item.compProps||{}).placeholder||item.placeholder;return(item.notEditHidePlaceholder||this.notEditHidePlaceholder?getText(placeholder):placeholder)||getText(text+item.label)}},{key:"init",value:function(){this.handleFormData(!0),this.handleRules(!0)}},{key:"handleFormData",value:function(isInit){var _this3=this;isInit&&(this.newFormData=this.formData),this.items.forEach((function(item){item.prop&&!_this3.formData[item.prop]&&0!==_this3.formData[item.prop]&&!1!==_this3.formData[item.prop]&&_this3.$set(_this3.newFormData,item.prop,"")}))}},{key:"handleRules",value:function(isInit){var _this4=this;this.isChangeValidateRule=!1,isInit&&(this.newRules=this.rules);var items=[];this.items.forEach((function(item){var tmpRules,requiredRules=[],tmpItem=_cloneDeep(item),rules=_this4.newRules[tmpItem.prop]||[];if(tmpItem.required&&!rules.find((function(rule){return rule.required}))){var message="",trigger="blur";/(input|select|autocomplete)$/.test(tmpItem.type)||!tmpItem.type?message="请输入".concat(tmpItem.label):"button"!==tmpItem.type&&"text"!==tmpItem.type&&(message="请选择".concat(tmpItem.label),trigger="change"),"autocomplete"===tmpItem.type&&(trigger="change"),requiredRules=message?[{required:!0,message,trigger}]:[]}(tmpRules=[].concat(_toConsumableArray(requiredRules),_toConsumableArray(Array.isArray(tmpItem.rules)?tmpItem.rules:tmpItem.rules?[tmpItem.rules]:[]),_toConsumableArray(rules))).length&&(tmpItem.rules=tmpRules),items.push(tmpItem)})),this.newRules=_merge({},this.rules,items.filter((function(item){return item.rules})).reduce((function(prev,now){return _objectSpread2(_objectSpread2({},prev),{},(value=now.rules,(key=now.prop)in(obj={})?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj));var obj,key,value}),{})),this.newItems=items,this.$nextTick((function(){_this4.isChangeValidateRule&&_this4.clearValidate(),_this4.isChangeValidateRule=!0}))}},{key:"clearValidate",value:function(props){var _this$$refs;null!==(_this$$refs=this.$refs)&&void 0!==_this$$refs&&_this$$refs.form&&this.$refs.form.clearValidate(props)}},{key:"resetFields",value:function(){var _this$$refs2;null!==(_this$$refs2=this.$refs)&&void 0!==_this$$refs2&&_this$$refs2.form&&this.$refs.form.resetFields()}},{key:"validateField",value:function(props,cb){var _this$$refs3;null!==(_this$$refs3=this.$refs)&&void 0!==_this$$refs3&&_this$$refs3.form&&this.$refs.form.validateField(props,cb)}},{key:"validate",value:function(cb){var _this5=this,promise=new Promise((function(resolve){resolve(_this5.newFormData)}));return cb?this.$refs.form.validate((function(isValid,invalidFields){return cb(isValid,invalidFields)})):promise=this.$refs.form.validate().then((function(){return Promise.resolve(_this5.newFormData)})),promise}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),FormEngine}();__decorate([Prop({type:Array,default:function(){return[]}})],FormEngine.prototype,"items",void 0),__decorate([Prop({type:Number,default:24})],FormEngine.prototype,"span",void 0),__decorate([Prop({type:Boolean,default:!1})],FormEngine.prototype,"notEditHidePlaceholder",void 0),__decorate([Prop({type:Object,default:function(){return{}}})],FormEngine.prototype,"rules",void 0),__decorate([Prop({type:Object,default:function(){return{}}})],FormEngine.prototype,"formData",void 0),__decorate([Prop({type:Object,default:function(){return{}}})],FormEngine.prototype,"rowProps",void 0),__decorate([Prop({type:Object,default:function(){return{}}})],FormEngine.prototype,"rowOn",void 0),__decorate([Prop({type:Object,default:function(){return{}}})],FormEngine.prototype,"colProps",void 0),__decorate([Prop({type:Object,default:function(){return{}}})],FormEngine.prototype,"colOn",void 0),__decorate([Prop(Boolean)],FormEngine.prototype,"disabled",void 0),__decorate([Prop(Boolean)],FormEngine.prototype,"clearable",void 0),__decorate([Watch("items",{deep:!0})],FormEngine.prototype,"watchItems",null),__decorate([Watch("rules",{deep:!0})],FormEngine.prototype,"watchRules",null),__decorate([Watch("formData",{deep:!0})],FormEngine.prototype,"watchFormData",null);var __vue_script__=FormEngine=__decorate([Component],FormEngine),__vue_render__=function(){var _vm=this,_c=_vm._self._c||_vm.$createElement;return _c("el-form",_vm._g(_vm._b({ref:"form",staticClass:"form-engine",attrs:{rules:_vm.newRules,model:_vm.newFormData,"validate-on-rule-change":_vm.getAttrValue(_vm.$attrs,"validate-on-rule-change",_vm.isChangeValidateRule),disabled:_vm.disabled}},"el-form",_vm.$attrs,!1),_vm.$listeners),[_c("el-row",_vm._g(_vm._b({},"el-row",_vm.rowProps,!1),_vm.rowOn),[_vm._l(_vm.newItems,(function(item){return[_c("el-col",_vm._g(_vm._b({key:item.prop,attrs:{span:item.span||_vm.span}},"el-col",_vm.colProps||item.colProps,!1),_vm.colOn||item.colOn),[item.formSlot?item.prop?_vm._t(item.prop,null,{item,value:_vm.newFormData[item.prop],rule:item.rules,items:_vm.newItems,formData:_vm.newFormData,rules:_vm.newRules}):_vm._e():_c("el-form-item",_vm._g(_vm._b({ref:(item.props||{}).ref||item.prop,refInFor:!0,attrs:{prop:item.prop,label:item.label,rules:item.rules}},"el-form-item",item.props,!1),item.on),[item.slot?_vm._t(item.prop,null,{item,value:_vm.newFormData[item.prop],items:_vm.newItems,formData:_vm.newFormData}):[_vm.getComponentName(item.type)?_c(_vm.getComponentName(item.type),_vm._g(_vm._b({tag:"component",staticClass:"form-engine__item",attrs:{placeholder:_vm.getPlaceholder(item),type:item.type,clearable:_vm.getAttrValue(item.compProps,"clearable",item.clearable||_vm.clearable),disabled:_vm.getAttrValue(item.compProps,"disabled",item.disabled||_vm.disabled),readonly:_vm.getAttrValue(item.compProps,"readonly",item.readonly)},model:{value:_vm.newFormData[item.prop],callback:function($$v){_vm.$set(_vm.newFormData,item.prop,$$v)},expression:"newFormData[item.prop]"}},"component",item.compProps,!1),item.compOn),["select"===item.type?_vm._l(item.options||[],(function(subItem,idx){return _c("el-option",_vm._b({key:idx,attrs:{disabled:subItem.disabled,value:subItem.value,label:subItem.label}},"el-option",subItem,!1))})):_vm._e()],2):_c("span",_vm._g(_vm._b({},"span",item.compProps,!1),item.compOn),[_vm._v("\n              "+_vm._s(_vm.newFormData[item.prop])+"\n            ")])]],2)],2),_vm._v(" "),item.row&&(item.span||_vm.span)&&(item.span||_vm.span)<24&&(item.span||_vm.span)>0?_c("el-col",{key:item.prop+"__row",attrs:{span:24-(item.span||_vm.span)}}):_vm._e()]})),_vm._v(" "),_vm._t("default",null,{items:_vm.newItems,formData:_vm.newFormData,rules:_vm.newRules})],2),_vm._v(" "),_vm._t("independent",null,{items:_vm.newItems,formData:_vm.newFormData,rules:_vm.newRules})],2)};__vue_render__._withStripped=!0;var __vue_component__=__vue_normalize__({render:__vue_render__,staticRenderFns:[]},(function(inject){inject&&inject("data-v-80a4c3dc_0",{source:"\n.form-engine .el-col .form-engine__item {\n  width: 100%;\n}\n.form-engine .el-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n",map:{version:3,sources:["D:\\Users\\Desktop\\study\\form-engine\\src\\form-engine.vue"],names:[],mappings:";AAkcA;EACA,WAAA;AACA;AAEA;EACA,aAAA;EACA,eAAA;AACA",file:"form-engine.vue",sourcesContent:['<template>\n  <el-form\n    class="form-engine"\n    v-bind="$attrs"\n    v-on="$listeners"\n    :rules="newRules"\n    :model="newFormData"\n    ref="form"\n    :validate-on-rule-change="getAttrValue($attrs, \'validate-on-rule-change\', isChangeValidateRule)"\n    :disabled="disabled"\n  >\n    <el-row v-bind="rowProps" v-on="rowOn">\n      <template v-for="item of newItems">\n        <el-col\n          :key="item.prop"\n          v-bind="colProps || item.colProps"\n          v-on="colOn || item.colOn"\n          :span="item.span || span"\n        >\n          <el-form-item\n            v-if="!item.formSlot"\n            :prop="item.prop"\n            :label="item.label"\n            :rules="item.rules"\n            :ref="(item.props || {}).ref || item.prop"\n            v-bind="item.props"\n            v-on="item.on"\n          >\n            <slot\n              v-if="item.slot"\n              :name="item.prop"\n              :item="item"\n              :value="newFormData[item.prop]"\n              :items="newItems"\n              :form-data="newFormData"\n            >\n            </slot>\n            <template v-else>\n              <component\n                v-bind="item.compProps"\n                v-on="item.compOn"\n                :placeholder="getPlaceholder(item)"\n                :type="item.type"\n                v-if="getComponentName(item.type)"\n                :is="getComponentName(item.type)"\n                v-model="newFormData[item.prop]"\n                class="form-engine__item"\n                :clearable="getAttrValue(item.compProps, \'clearable\', item.clearable || clearable)"\n                :disabled="getAttrValue(item.compProps, \'disabled\', item.disabled || disabled)"\n                :readonly="getAttrValue(item.compProps, \'readonly\', item.readonly)"\n              >\n                <template v-if="item.type === \'select\'">\n                  <el-option\n                    v-for="(subItem, idx) of item.options || []"\n                    :key="idx"\n                    :disabled="subItem.disabled"\n                    :value="subItem.value"\n                    :label="subItem.label"\n                    v-bind="subItem"\n                  ></el-option>\n                </template>\n              </component>\n              <span v-bind="item.compProps" v-on="item.compOn" v-else>\n                {{ newFormData[item.prop] }}\n              </span>\n            </template>\n          </el-form-item>\n          <slot\n            v-else-if="item.prop"\n            :item="item"\n            :value="newFormData[item.prop]"\n            :rule="item.rules"\n            :items="newItems"\n            :form-data="newFormData"\n            :rules="newRules"\n            :name="item.prop"\n          >\n          </slot>\n        </el-col>\n        <el-col\n          v-if="\n            item.row && (item.span || span) && (item.span || span) < 24 && (item.span || span) > 0\n          "\n          :key="item.prop + \'__row\'"\n          :span="24 - (item.span || span)"\n        >\n        </el-col>\n      </template>\n      <slot :items="newItems" :form-data="newFormData" :rules="newRules"></slot>\n    </el-row>\n    <slot name="independent" :items="newItems" :form-data="newFormData" :rules="newRules"></slot>\n  </el-form>\n</template>\n\n<script lang="ts">\nimport {\n  Component, Vue, Watch, Prop,\n} from \'vue-property-decorator\';\nimport {\n  Form, FormItem, Row, Col,\n} from \'element-ui\';\nimport {\n  camelCase, cloneDeep, isEqual, merge,\n} from \'lodash\';\nimport { ValidateCallback, ValidateFieldCallback } from \'element-ui/types/form.d\';\n\nexport type Rule = {\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  [key: string]: any;\n};\n\nexport type FormData = {\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  [key: string]: any;\n};\n\nexport type Item = {\n  span: number;\n  row: number;\n  prop: string;\n  formSlot: boolean;\n  required: boolean;\n  slot: boolean;\n  rules: Rule | Rule[];\n  label: string;\n  placeholder: string;\n  type: string;\n  options: {\n    label?: string;\n    value: string | number;\n  }[];\n  clearable: boolean;\n  readonly: boolean;\n  disabled: boolean;\n  notEditHidePlaceholder: boolean;\n  props: FormItem;\n  on: Record<string, () => void> | HTMLElementEventMap;\n  colProps: Col;\n  colOn: Record<string, () => void> | HTMLElementEventMap;\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  compProps: Record<string, any>;\n  compOn: Record<string, () => void> | HTMLElementEventMap;\n};\n\nexport type RowProps = Row;\n\nexport type ColProps = Col;\n\nexport type On = Record<string, () => void> | HTMLElementEventMap;\n\n@Component\nexport default class FormEngine extends Vue {\n  @Prop({\n    type: Array,\n    default: () => [],\n  })\n  items!: Item[];\n\n  @Prop({\n    type: Number,\n    default: 24,\n  })\n  span!: number;\n\n  @Prop({\n    type: Boolean,\n    default: false,\n  })\n  notEditHidePlaceholder!: boolean;\n\n  @Prop({\n    type: Object,\n    default: () => ({}),\n  })\n  rules!: Rule;\n\n  @Prop({\n    type: Object,\n    default: () => ({}),\n  })\n  formData!: FormData;\n\n  @Prop({\n    type: Object,\n    default: () => ({}),\n  })\n  rowProps!: RowProps;\n\n  @Prop({\n    type: Object,\n    default: () => ({}),\n  })\n  rowOn!: On;\n\n  @Prop({\n    type: Object,\n    default: () => ({}),\n  })\n  colProps!: ColProps;\n\n  @Prop({\n    type: Object,\n    default: () => ({}),\n  })\n  colOn!: On;\n\n  @Prop(Boolean)\n  disabled!: boolean;\n\n  @Prop(Boolean)\n  clearable!: boolean;\n\n  @Watch(\'items\', {\n    deep: true,\n  })\n  watchItems() {\n    // 在原有数据中, 进行新增rules, data的数据;\n    this.handleFormData();\n    this.handleRules();\n  }\n\n  @Watch(\'rules\', {\n    deep: true,\n  })\n  watchRules() {\n    // 依据最新数据直接重置rules\n    this.handleRules(true);\n  }\n\n  @Watch(\'formData\', {\n    deep: true,\n  })\n  watchFormData() {\n    // 同步最新数据\n    if (isEqual(this.newFormData, this.formData)) {\n      return;\n    }\n\n    this.handleFormData(true);\n  }\n\n  newFormData: FormData = {};\n\n  newRules: Rule = {};\n\n  newItems: Item[] = [];\n\n  $refs!: {\n    form: Form;\n  };\n\n  isChangeValidateRule = false;\n\n  created() {\n    this.init();\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  getAttrValue(dataSource: any = {}, key: string, defalutValue: any) {\n    return dataSource?.[key] ?? dataSource?.[camelCase(key)] ?? defalutValue;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  getComponentName(type: string) {\n    let cName = \'\';\n\n    // eslint-disable-next-line no-shadow\n    const checkType = (type = \'\', nowType = \'\') => type.indexOf(nowType) > -1;\n\n    if (!type || type === \'input\' || type === \'textarea\') {\n      cName = \'el-input\';\n    } else if (type === \'time\') {\n      cName = \'el-time-picker\';\n    } else if (checkType(type, \'date\')) {\n      cName = \'el-date-picker\';\n    } else if (type && type !== \'text\') {\n      cName = `el-${type}`;\n    }\n\n    return cName;\n  }\n\n  getPlaceholder(item: Item) {\n    const cName = this.getComponentName(item.type);\n    const text = /(input|select|autocomplete)$/.test(cName)\n      ? `请${item.type === \'select\' ? \'选择\' : \'输入\'}`\n      : \'\';\n    const compProps = (item?.compProps || {}) as {\n      disabled: boolean;\n      readonly: boolean;\n    };\n    const hidePlaceholder = item.notEditHidePlaceholder || this.notEditHidePlaceholder;\n\n    // eslint-disable-next-line no-shadow\n    const getText = (text: string) => (this.disabled\n      || item.disabled\n      || item.readonly\n      || compProps?.disabled\n      || compProps?.readonly\n      ? \'\'\n      : text);\n\n    const placeholder = (item.compProps || {}).placeholder || item.placeholder;\n\n    return (hidePlaceholder ? getText(placeholder) : placeholder) || getText(text + item.label);\n  }\n\n  init() {\n    this.handleFormData(true);\n    this.handleRules(true);\n  }\n\n  handleFormData(isInit?: boolean) {\n    if (isInit) {\n      this.newFormData = this.formData;\n    }\n\n    // 当不存在值时，设置一个默认值\n    this.items.forEach((item: Item) => {\n      if (\n        item.prop\n        && !this.formData[item.prop]\n        && this.formData[item.prop] !== 0\n        && this.formData[item.prop] !== false\n      ) {\n        this.$set(this.newFormData, item.prop, \'\');\n      }\n    });\n  }\n\n  handleRules(isInit?: boolean) {\n    this.isChangeValidateRule = false;\n    if (isInit) {\n      this.newRules = this.rules;\n    }\n    const items: Item[] = [];\n\n    this.items.forEach((item: Item) => {\n      let tmpRules: Rule[] = [];\n      let requiredRules: Rule[] = [];\n      const tmpItem = cloneDeep(item);\n\n      const rules: Rule[] = this.newRules[tmpItem.prop] || [];\n\n      // 当存在required 时，自动添加required验证\n      if (tmpItem.required) {\n        const isExist = rules.find((rule: Rule) => rule.required);\n\n        if (!isExist) {\n          let message = \'\';\n          let trigger = \'blur\';\n\n          if (/(input|select|autocomplete)$/.test(tmpItem.type) || !tmpItem.type) {\n            message = `请输入${tmpItem.label}`;\n          } else if (tmpItem.type !== \'button\' && tmpItem.type !== \'text\') {\n            message = `请选择${tmpItem.label}`;\n            trigger = \'change\';\n          }\n\n          if (tmpItem.type === \'autocomplete\') {\n            trigger = \'change\';\n          }\n\n          requiredRules = message\n            ? [\n              {\n                required: true,\n                message,\n                trigger,\n              },\n            ]\n            : [];\n        }\n      }\n\n      tmpRules = [\n        ...requiredRules,\n        // eslint-disable-next-line no-nested-ternary\n        ...(Array.isArray(tmpItem.rules) ? tmpItem.rules : tmpItem.rules ? [tmpItem.rules] : []),\n        ...rules,\n      ];\n\n      if (tmpRules.length) {\n        tmpItem.rules = tmpRules;\n      }\n\n      items.push(tmpItem);\n    });\n\n    this.newRules = merge(\n      {},\n      this.rules,\n      items\n        .filter((item: Item) => item.rules)\n        .reduce(\n          (\n            prev: {\n              // eslint-disable-next-line @typescript-eslint/no-explicit-any\n              [key: string]: any;\n            },\n            now: Item,\n          ) => ({\n            ...prev,\n            [now.prop]: now.rules,\n          }),\n          {},\n        ) as Rule,\n    );\n\n    this.newItems = items;\n\n    // 改动rules，可能会触发表单验证\n    this.$nextTick(() => {\n      if (this.isChangeValidateRule) {\n        this.clearValidate();\n      }\n\n      this.isChangeValidateRule = true;\n    });\n  }\n\n  clearValidate(props?: string[] | string) {\n    if (this.$refs?.form) this.$refs.form.clearValidate(props);\n  }\n\n  resetFields() {\n    if (this.$refs?.form) this.$refs.form.resetFields();\n  }\n\n  validateField(props: string[] | string, cb?: ValidateFieldCallback) {\n    if (this.$refs?.form) this.$refs.form.validateField(props, cb);\n  }\n\n  validate(cb?: ValidateCallback) {\n    let promise: Promise<FormData> = new Promise((resolve) => {\n      resolve(this.newFormData);\n    });\n\n    if (!cb) {\n      promise = this.$refs.form.validate().then(() => Promise.resolve(this.newFormData));\n    } else {\n      this.$refs.form.validate((isValid, invalidFields) => cb(isValid, invalidFields));\n    }\n\n    return promise;\n  }\n}\n<\/script>\n\n<style>\n.form-engine .el-col .form-engine__item {\n  width: 100%;\n}\n\n.form-engine .el-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n</style>\n']},media:void 0})}),__vue_script__,undefined,false,undefined,!1,__vue_create_injector__,void 0,void 0),pkg_version="1.1.6",install=function(){Vue$1.component("form-engine",__vue_component__)};"undefined"!=typeof window&&window.Vue&&install();var index={install,version:pkg_version};export default index;export{__vue_component__ as FormEngine,install};
