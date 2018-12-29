// components/select/select-item/select-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeType: String, // 判断是否正在选择，改样式
    type: String,
    text: String, //选择的文字
    selects: { // 传入所有的选择项
      type: Object,
      observer(newVal, oldVal, changedPath) {
        // 因为所有的选择项是动态获取的，第一次传入的为null
        let ownselects = this.getCorrectSelects(newVal)
        // 默认显示的内容
        let arr = this.getArrayByIndex(ownselects)
        this.setData({ pickerArray: arr, ownselects })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pickerIndex: [0, 0, 0], // 每一列中选择的索引
    pickerArray: []// 显示的每一列中的元素
  },


  /**
   * 组件的方法列表
   */
  methods: {
    select() { // 触发父组件绑定事件，改变父组件的changeActive
      this.triggerEvent('changeActive', { type: this.data.type })
    },
    pickercancel() { // 取消选择后，颜色回复
      this.triggerEvent('changeActive', { type: null })
    },
    getCorrectSelects(selects) {// selects里的数据是一大堆，获取到对应的数据
      switch (this.data.type) {
        case 'i':
          return selects.headerNav[0];
        case 'c':
          return selects.headerNav[1];
        case 's':
          return selects.headerNav[2];
        case 'd':
          return selects.headerNavTwo[0];
        case 'm':
          return selects.headerNavTwo[1];
      }
    },
    getArrayByIndex(ownselects, pickerIndex) {
      // 根据当前的index，更改显示的数据
      if (!ownselects) ownselects = this.data.ownselects
      if (!pickerIndex) pickerIndex = this.data.pickerIndex

      let pickerArray = JSON.parse(JSON.stringify(this.data.pickerArray))

      let arr1 = ownselects.oneCover
      pickerArray[0] = arr1.map(item => item.text)

      let arr2 = arr1[pickerIndex[0]].twoCover || []
      pickerArray[1] = arr2.map(item => item.text)
      let arr3 = arr2[pickerIndex[1]] ? (arr2[pickerIndex[1]].threeCover || []) : []

      pickerArray[2] = arr3.map(item => item.text)

      return pickerArray
    },
    bindMultiPickerChange(e) {
      // 当选择更改后

      let pickerIndex = e.detail.value
      let text = ''
      if (!this.data.pickerArray[1].length) {
        text = this.data.pickerArray[0][pickerIndex[0]]
      } else if (!this.data.pickerArray[2].length) {
        text = this.data.pickerArray[1][pickerIndex[1]]
      } else {
        text = this.data.pickerArray[2][pickerIndex[2]]
      }
      // 更改父组件的text
      this.triggerEvent('changeText', {
        type: this.data.type,
        value: text
      })
      this.setData({})
      this.triggerEvent('changeActive', { type: null })
    },
    bindMultiPickerColumnChange(e) { // 在picker中不断选择的时候，去更改pickerIndex
      // 更改对应的pickerArray
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
      const data = {
        pickerIndex: this.data.pickerIndex
      }
      switch (e.detail.column) {
        case 0:
          data.pickerIndex = [e.detail.value, 0, 0]; break;
        case 1:
          data.pickerIndex = [data.pickerIndex[0], e.detail.value, 0]; break;
        case 2:
          data.pickerIndex = [data.pickerIndex[0], data.pickerIndex[1], e.detail.value]; break;
      }

      data.pickerArray = this.getArrayByIndex(undefined, data.pickerIndex)

      this.setData(data)
    }
  }
})
