// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    back(){
      // 关闭当前页面，返回上一页面或多级页面。
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
