//import axios from "@/axios.js";
//import bus from "@/bus.js";
export default {
	data() {
		return {
			activePath: '/test3/index',
		}
	},
	mounted() { //实例挂载之后
      this.activePath=this.$route.path;
	},
	methods: { //方法	
		handleSelect(key, keyPath) {
			// console.log(key, keyPath);
			this.$router.push({
				path:key
			});
			console.log('this.$route.path:',key)
		}
	},
	watch: { //监听
		'$route'(to, from) { // 对路由变化作出响应...

		},
	},
	created() { //实例创建之后

	}
}