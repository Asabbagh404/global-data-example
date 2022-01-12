import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$foo = 'foo';
Vue.prototype.$myFunction = (a, b) => a + b;

new Vue({
  render: h => h(App),
}).$mount('#app')
