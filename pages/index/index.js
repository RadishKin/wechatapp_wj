//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    tables:[
      {text: '中国健康与养⽼追踪调查', id: 'tb1'},
      { text: '测试问卷2', id: 'tb2'},
      { text: '测试问卷3', id: 'tb3'},
      { text: '测试问卷4', id: 'tb4'}
    ]

    
    
  },
  //事件处理函数
  bindViewTap: function(event) {
    wx.navigateTo({
      url: '../tables/' + event.target.id + '/' + event.target.id,
    })
  },

  

 
})
