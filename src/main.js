import Vue from 'vue'
import App from './App.vue'
import store from './store'
import element from './element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

Vue.use(element);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
