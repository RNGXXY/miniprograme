const request = require('../utils/request.js')

const getSelects = () => {
  return request({
    url: 'https://fykemmlf.qcloud.la/selects.json'
  })
}

module.exports = getSelects