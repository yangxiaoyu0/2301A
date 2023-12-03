import axios from 'axios'
import { Loading } from 'element-ui';
import Cookies from 'js-cookie';

const requset = axios.create({
  baseURL: '/',
  timeout: 3000,
  headers: {}
})
var loadingxy = null
// 添加请求拦截器
requset.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    loadingxy = Loading.service({
      lock: true, //lock的修改符--默认是false
      text: '拼命加载中...', //显示在加载图标下方的加载文案
      spinner: 'el-icon-loading', //自定义加载图标类名
      background: 'rgba(0, 0, 0, 0.7)' //遮罩层颜色
    })
		config.headers.Authorization = 'Bearer ' + Cookies.get('token')
		console.log('Bearer ' + Cookies.get('token'));
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
requset.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
		loadingxy.close()
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
		loadingxy.close()
    return Promise.reject(error)
  }
)

requset.addURL = function(url){
	return process.env.VUE_APP_IDENT + url
}

export default requset
