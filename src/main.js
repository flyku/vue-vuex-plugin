// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import '@/assets/css/base-pc.css'
import '@/assets/css/common.css'
import '@/assets/css/element.css'
// import axios from 'axios'
// Vue.prototype.$s = axios;
Vue.config.productionTip = false
// import echarts from 'echarts';
// Vue.prototype.echarts = echarts;
Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
	render: h => h(App)
})
