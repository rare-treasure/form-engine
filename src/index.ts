// eslint-disable-next-line import/no-named-default
import Vue, { PluginFunction } from 'vue'
import FormEngine from './form-engine.vue'
import pkg from '../package.json'

const install: PluginFunction<never> = () => {
  Vue.component('form-engine', FormEngine)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version: pkg.version
}

export { FormEngine, install }
