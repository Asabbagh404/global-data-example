import Vue from 'vue'
import App from './App.vue'
import myPlugin from "./myPlugin";

Vue.config.productionTip = false

Vue.prototype.$foo = 'foo';
Vue.prototype.$myFunction = (a, b) => a + b;
Vue.use(myPlugin, {foo: 'bar'});

new Vue({
  render: h => h(App),
}).$mount('#app')
