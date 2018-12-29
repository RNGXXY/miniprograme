
const {request} = require('../utils/index.js')

const getBannerList = () => {
  return request({
    url: 'https://wap.shixiseng.com/operations/recommend',
    method: 'POST',
    formData: true,
    actions: {
      loading: true,
      fail: true
    },
    data: {
      req_id: '35432d13-e87a - 2495 - 93f5-17b2773fc7a6',
      uuid: '886b27df - 844b-0983 - a34c - af6facd3d140',
      city: '全国',
      client_type: 'wap',
      client_os: '',
      url: 'https://wap.shixiseng.com/',
      uri: '/',
      refer: 'https://wap.shixiseng.com/',
      ad_groups: JSON.stringify([{ "ad_position": "P_9_1", "max_num": 10 }])
    }
  })
}

module.exports = getBannerList