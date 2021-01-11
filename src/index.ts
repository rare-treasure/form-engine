import Vue from 'vue'
import FormEngine from './form-engine.vue'

export default {
  install() {
    Vue.component(FormEngine.name, FormEngine)
  }
}
