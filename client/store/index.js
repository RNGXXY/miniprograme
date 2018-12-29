const reducer = require('./reducer')

class Store {
  constructor( reducer ){
    this.reducer = reducer
    this.listeners = []
    this.init()
  }
  // 获取初始化数据
  init(){
    this.state = this.reducer(undefined,{type:'@@INIT/REDUCER'})
  }

  // 派发action 
  dispatch(action){
    if (typeof action === 'function') {
      action(this.dispatch.bind(this))
      return false;
    }
    this.state = this.reducer(this.state,action)
    this.listeners.forEach(callback => {
      callback(this.state)
    })
  }

  // 订阅state的变化
  subscribe(callback){
    this.listeners.push(callback)
  }

  // 获取store中的状态
  getState(){
    return this.state
  }

}

// 记得带参数
module.exports = new Store(reducer)

