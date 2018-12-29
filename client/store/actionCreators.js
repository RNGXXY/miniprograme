const getSelects = require('../api/getSelects.js')

const actionCreators = {
  getSelects(){
    return (dispatch)=>{
      getSelects().then(res=>{
        dispatch({
          type: 'CHANGE_SELECTS',
          payload: res.msg
        })
      })
    }
  }
}

module.exports = actionCreators