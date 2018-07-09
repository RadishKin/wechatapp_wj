// pages/tables/tb1/tb1.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    title : '中国健康与养老追踪调查',
    showTopTips : false,
    TopTipsText : '',
    forms:[
      {qid:1,order:1,formType:1,qText:'您所居住的社区是？',radio:{A:'家庭住宅',B:'养老院及其他机构',C:'医院',D:'其他'}},
      {qid:2,radio:'养老院及其他机构'},
      {radio:'医院'},
      {radio:'其他'}
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log()
      wx.request({
        url: 'https://adc.com/getTables',
        method: 'POST',
        data: {
          wjid: "1",
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (statusCode == 200) {
            this.data.tables = res.data
          }else{
            this.data.showTopTips = true;
            this.data.TopTipsText = '问卷拉取失败，请下拉刷新'
          }

        }

      })
  
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
    wx.request({
        url: 'https://adc.com/getTables',
        method: 'POST',
        data: {
          wjid: "1",
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (statusCode == 200) {
            this.data.tables = res.data
          }else{
            this.data.showTopTips = true;
            this.data.TopTipsText = '问卷拉取失败，请下拉刷新'
          }

        }

      })
   


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