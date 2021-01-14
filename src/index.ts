// eslint-disable-next-line import/no-named-default
import Vue, { PluginFunction } from 'vue'
import FormEngine from './form-engine.vue'

const install: PluginFunction<never> = () => {
  Vue.component('form-engine', FormEngine)
}

export default {
  install
}

export { FormEngine }
