// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueResource);
// Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,

  template: '<App/>',
  components: { App }
})
