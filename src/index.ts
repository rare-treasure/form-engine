// eslint-disable-next-line import/no-named-default
import Vue, { PluginFunction } from 'vue'
import FormEngine from './form-engine.vue'

const install: PluginFunction<never> = () => {
  Vue.component('form-engine', FormEngine)
}

(FormEngine as typeof FormEngine & { install: PluginFunction<never> }).install = install

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default FormEngine

export { FormEngine, install }
