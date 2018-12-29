
const request = ({ url, data = {}, formData = false, method = 'GET', complete, actions = {} }) => {


  let header = method === 'POST' ? {
    'content-type': !formData ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8'
  } : { 'content-type': 'application/json;charset=utf8' }

  if (actions.loading) wx.showLoading({ title: '数据请求中...' })

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header,
      method,
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        switch (res.data.code) {
          case 100:
            resolve(res.data); break;
          default:
            if (actions.fail) {
              wx.showToast({
                title: '请求失败...',
                icon: 'none'
              })
            }
            reject(res.data);
        }
      },
      fail: function (res) {
        reject(res.data)
        if (actions.fail) {
          wx.showToast({
            title: '请求失败...',
            icon: 'none'
          })
        }
      },
      complete: function (res) {
        if (complete) complete(res);
        if (actions.loading) wx.hideLoading()

      },
    })
  })
}

module.exports = request