// 泰智慧页面的请求API文件
import request from '@/utils/http'

// 获取地图全部数据
export function mapInfo(id) {
  return request({
    method: 'get',
    url: `/DcRegion/info?regionId=${id}`
  })
}