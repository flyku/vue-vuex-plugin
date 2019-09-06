import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/index.vue';
import test2 from '@/components/test2/index.vue';
Vue.use(Router);
const router = new Router({
	scrollBehavior(to, from, savePosition) {
		if (savePosition) {
			return savePosition;
		} else {
			return { x: 0, y: 0 }
		}
	},
	routes: [{
		path: '/',
		name: '主页',
		component: main,
		redirect: '/test1',
		children: [{
			path: '/test1',
			name: '测试页1',
			component: resolve => require(['@/components/test1/index.vue'], resolve)
		}]
	},{
			path: '/test2',
			name: '测试页2',
			component: main,
			children: [
				{
					path: 'index',
					component: resolve => require(['@/components/test2/index.vue'], resolve),
					children: [{
						path: '/test3/index',
						component: resolve => require(['@/components/test3/index.vue'], resolve)
					}, {
						path: '/test4/index',
						component: resolve => require(['@/components/test4/index.vue'], resolve)
					}]
				},
			]
		}
	]
});
export default router;