import axios from 'axios'
import qs from 'qs'
import router from './router'
import store from './vuex/store.js'
var $axios = axios.create({
	//	正式地址
	baseURL: 'https://passport.baidu.com/passApi/js',
	//测试地址
	//baseURL: 'http://192.168.9.50:8888',
	// baseURL: '/api',
	// timeout: 5000,
		headers: {
			'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
		}
});
$axios.defaults.withCredentials = false; //不允许携带cookie
//POST传参序列化
$axios.interceptors.request.use((config) => {
	if(config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	//  config.headers.Authorization = 'token';
	if(sessionStorage.getItem('Token')) { //判断是否存在token    	
		config.headers.Authorization = sessionStorage.getItem('Token');
	} else {
		router.push({
			path: '/'
		})
	}
	//	console.log(config)
	return config;
}, (error) => {
	_.toast("错误的传参", 'fail');
	return Promise.reject(error);
});

// 添加一个响应拦截器
$axios.interceptors.response.use(function(res) {
	//处理登录超时
	if(res.data.code === 401) { //异常code为401
		sessionStorage.clear(); //清空session
		router.push({
			path: '/'
		})
	}
	return res;
}, function(err) {
	if(err.response.status == 401) { //登录超时		
		store.state.isexpried += 1;
		store.state.expriedmsg=err.response.data.error_description;
		sessionStorage.clear(); //清空session
		router.push({
			path: '/'
		})
	}
	return Promise.reject(error);
});

export default $axios