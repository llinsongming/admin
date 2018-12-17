import axios from 'axios';
import { Loading } from 'element-ui';
import router from '../router/index';

let loading        //定义loading变量

function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '拼命加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}

const baseUrl = 'http://120.79.174.103:666';
export default {
    baseUrl:baseUrl,
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            startLoading()//loading开始
            axios({
                url: baseUrl + _url,
                params: _params,
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "auth": JSON.parse(window.localStorage.getItem('access_token'))[0],
				},
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
                    return ret
				}],
            }).then((res) => {
                endLoading()//loading结束
                if(!res.data.status && res.data.message == 'unauth'){
                    router.push({name: 'LoginView'});
                } else {
                    resolve(res.data);
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            // startLoading()//loading开始
            axios({
				url: baseUrl + _url,
				method: 'post',
				data: _params,
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "auth": JSON.parse(window.localStorage.getItem('access_token'))[0],
				},
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
                    return ret
				}],
            }).then(res => {
                // endLoading()//loading结束
                if(!res.data.status && res.data.message == 'unauth'){
                    router.push({name: 'LoginView'});
                } else {
                    resolve(res.data);
                }
            }).catch(error => {

            	reject(error)
            })
        })
    },
    loginPost(_url, _params = {}){
        return new Promise((resolve, reject) => {
            // startLoading()//loading开始
            axios({
				url: baseUrl + _url,
				method: 'post',
				data: _params,
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // "auth": JSON.parse(window.localStorage.getItem('access_token')),
				},
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
                    return ret
				}],
            }).then(res => {
                // endLoading()//loading结束
                if(!res.data.status && res.data.message == 'unauth'){
                    router.push({name: 'LoginView'});
                } else {
                    resolve(res.data);
                }
            }).catch(error => {

            	reject(error)
            })
        })
    }
}