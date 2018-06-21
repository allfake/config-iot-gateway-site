import Vue from 'vue'
import App from './App.vue'
import AmazonIot from './AmazonIot.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

var vue = new Vue({
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h => h(AmazonIot)
}).$mount('#amazonIot')