import axios from 'axios'
import { Loading } from 'element-ui';

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

const baseUrl = 'https://bm.urundata.com:28888';
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
                }
            }).then((res) => {
                endLoading()//loading结束
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    getTest(_url, _params = {}){
        return new Promise((resolve, reject) => {
            startLoading()//loading开始
            axios({
                url: _url,
                params: _params,
                method: 'get',
                headers: {
                }
            }).then((res) => {
                endLoading()//loading结束
                resolve(res)
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
                    // "auth": window.localStorage.getItem('token'),
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
                resolve(res)
            }).catch(error => {

            	reject(error)
            })
        })
    }
}