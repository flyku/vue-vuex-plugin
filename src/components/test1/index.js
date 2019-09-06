//import axios from "@/axios.js";
//import bus from "@/bus.js";

// export default {
// 	data() {
// 		return {
// 			activePath: '/',
// 		}
// 	},
// 	mounted() { //实例挂载之后
//       this.activePath=this.$route.path;
// 	},
// 	methods: { //方法	
// 		handleSelect(key, keyPath) {
// 			// console.log(key, keyPath);
// 			this.$router.push({
// 				path:key
// 			});
// 			console.log('this.$route.path:',key)
// 		}
// 	},
// 	watch: { //监听
// 		'$route'(to, from) { // 对路由变化作出响应...

// 		},
// 	},
// 	created() { //实例创建之后

// 	}
// }



import { mapState , mapMutations , mapActions , mapGetters  } from 'vuex';
export default {
  data(){
    return{
		count:0
    }
  },
  computed:{
    ...mapState({
      counts:(state) => state.count
    }),
    ...mapGetters({
       getternum:'docount'
    })
  },
  methods:{
    ...mapMutations({
      addnum:'SET_COUMT_ADD',
      reducenum:'SET_COUMT_REDUCE'
    }),
    ...mapActions({
      addmore:'ADD1000',
      reducemore:'REdUCE1000'
    }),
    add(){
	  this.addnum();
	  console.log(this)
	  this.count = this.counts;
      console.log(this.counts,'+1')
    },
    reduce(){
      this.reducenum()
	  this.count = this.counts;
      console.log(this.counts,'-1')
    },
    add1000(){
      this.addmore()
	  this.count = this.counts;
      console.log(this.counts,'+1000')
    },
    reduce1000(){
      this.reducemore()
	  this.count = this.counts;
      console.log(this.counts,'-1000')
    }
  },
  
  mounted(){
    console.log(this.counts,this.$store.state.count,111111111)
  }
}