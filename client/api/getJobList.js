


const {request} = require('../utils/index.js')

const getJobList = ({ p = 1 }) => {
  return request({
    url: 'https://wap.shixiseng.com/interns/search',
    data: {
      p
    }
  })
}

module.exports = getJobList