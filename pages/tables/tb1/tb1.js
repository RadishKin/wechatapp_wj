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
      {
        qid: 1, order: 1, formType: '2', qText: '您所居住的社区是？', radioItems: [
          { name: '家庭住宅', value: '0' },
          { name: '养老院及其他机构', value: '1', checked: true },
          { name: '医院', value: '2'},
          { name: '其他', value: '3'}
        ]
      },
       {
        qid: 2, order: 2, formType: '1', qText: '您所居住的社区是？', radioItems: [
          { name: '家庭住宅', value: '0' },
          { name: '养老院及其他机构', value: '1', checked: true },
          { name: '医院', value: '2' },
          { name: '其他', value: '3' }
        ]
      }, {
        qid: 3, order: 3, formType: '3', qText: '您所居住的社区是？', radioItems: [
          { name: '家庭住宅', value: '0' },
          { name: '养老院及其他机构', value: '1', checked: true },
          { name: '医院', value: '2' },
          { name: '其他', value: '3' }
        ]
      }
     
    ]
  
  },
  radioChange: function (e) {
    var value = e.detail.value;
    console.log(this.data);
    console.log('radio发生change事件，携带value值为：', value);

    var radioItems = this.data.forms[e.target.id].radioItems;
    console.log(radioItems);
    
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == value;
    }
    
    
    this.setData({
      radioItems: radioItems
    });
  }, 

  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
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