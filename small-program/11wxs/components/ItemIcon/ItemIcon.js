// components/ItemIcon/ItemIcon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      data:{
        type:Object,
        value:""
      },
      index:{
        type:Number
      }
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
    handleClick(){
      var index=this.properties.index;
      var id=this.properties.data.id;
      this.triggerEvent("toggle",{id,index})
    }
  },
  options:{
    multipleSlots:true
  }
})
