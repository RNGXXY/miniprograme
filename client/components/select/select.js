// components/select/select.js
// let { selectPickers } = require('../../models/index.js')
let store = require('../../store/index.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  lifetimes: {
    ready() {
      // 创建动画，为了第二组选择出现
      this.animation = wx.createAnimation({
        duration: 200
      })
    },
    created() {
      // 订阅全局的选择数据
      store.subscribe(state => {
        this.setData({ selects: state.selects })
      })
    }
  },

  data: {
    isTop: false,
    types: { // 选择的数据
      i: '不限',
      c: '全国',
      s: '不限',
      d: '不限',
      m: '不限'
    },
    activeType: null, // 判断哪个正在选择
    selects: store.getState().selects
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toggle() { // 切换选择组
      this.animation.translate(0, this.data.isTop ? 0 : -50).step()
      this.setData({ animation: this.animation.export(), isTop: !this.data.isTop })
    },
    changeActive(e) {// 切换正在选择的item
      this.setData({ activeType: e.detail.type })
    },
    changeText(e) { // 更改types中的文本

      let types = Object.assign({}, this.data.types)
      types[e.detail.type] = e.detail.value
      console.log('haha', types)
      this.setData({ types })
    },
    getTypes() { // 准备提供给search页面用来获取所有选择的类型的方法
      return this.data.types
    }
  }
})
