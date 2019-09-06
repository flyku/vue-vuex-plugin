//import axios from "@/axios.js";
//import bus from "@/bus.js";


export default {
	data() {
		return {
			activePath: '/',
		}
	},
	mounted() { //实例挂载之后code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb
	  this.activePath=this.$route.path;
	  console.log(this.$s)
	  // this.$s.get('/uni_login_wrapper.js').then(res=>{
		//   console.log(11111111111)
		// console.log(res)
	  // })
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



