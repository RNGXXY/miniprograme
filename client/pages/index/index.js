// client/pages/index/index.js
// 
const { getBannerList } = require('../../api/index.js')
const indexTabs = require('../../models/indexTabs.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据列表
    imgUrls: [],
    tabs: indexTabs,

    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorDots:true,
    circular:true,
    indicatorActiveColor:'rgba(255, 255, 255, .3)'
  },

  // 获取轮播图数据
  getBannerList() {
    getBannerList().then(res => {
      this.setData({ imgUrls: res.msg['P_9_1'] })
    })
  },

  // 跳转到搜索页面，使用导航跳转来实现路由跳转
  toSearch(){
    wx.navigateTo({
      url: '../search/search'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannerList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})