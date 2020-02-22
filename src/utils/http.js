import request from './request'
import { baseURL } from '../config/index'

const http = options => {
  return new Promise((resolve, reject) => {
    const defaultOptions = {}
    const newOptions = {
      ...defaultOptions,
      ...options
    }
    // headers默认传递json格式数据，这里也可以设置token，每次调用都会携带
    newOptions.headers = {
      'content-Type': 'application/json;charset=UTF-8',
      ...newOptions.headers
    }
    // 这里可以在调用的时候看到你的method、url、data、headers等参数
    // console.log(newOptions);
    request({
      method: newOptions.method,
      url: baseURL + newOptions.url,
      data: newOptions.data,
      headers: newOptions.headers
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export default http