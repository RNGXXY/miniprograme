// components/job-list/job-list.js
const { getJobList } = require('../../api/index.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indexType: { // 属性名
      type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: false, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
       
      }
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    jobs: []
  },
  /**
   * 组件的方法列表
   */
  lifetimes: {
    ready () {
      this.getJobList()
    }
  },
  methods: {
    getJobList () {
      getJobList({}).then(res => {
        var that = this;
        // WxParse.wxParse('a', 'html', '&#xf22d&#xe940-&#xf22d&#xe625-&#xf22d&#xe940:&#xf22d&#xe940', that);
        // console.log(that.a)
        this.setData({jobs: res.msg.slice(0, 4)})
      })
    }
  },
  options: {
    addGlobalClass: true,
  }
})
