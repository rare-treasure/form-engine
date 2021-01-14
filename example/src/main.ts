import Vue from 'vue'
import ElementUI from 'element-ui'
import FormEngine from 'v-form-engine'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI).use(FormEngine)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
