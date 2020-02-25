// pages/index2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biaotou: [{
      biaotou: "官方资讯",
      /*表头字 */
      biaotou1: "用车知识",
    }],

    xunhuan: [{
      xunhuantu1: "/pages/img/11.jpg",
      /*循环界面 车图 */
      xunhuantu2: "/pages/img/7.jpg"
    }],

    zhengwen1: [{
      zhengwentu1: "/pages/img/1.jpg",
      /*汽车图 */
      zhengwentu2: "/pages/img/8.jpg",
      /*转载图 */
      zhengwentu3: "/pages/img/9.jpg",
      /*回复图 */
      zhengwentu4: "/pages/img/10.jpg",
      /*点赞图 */
      zhengwen: "全球十大豪车,迈特论丶法拉利垫底...",
      zuozhe: "新华社",
      zhuanfashu: "1",
      pinglunshu: "2",
      dianzanshu: "3"
    }],

    zhengwen2: [{
        zhengwentu1: "/pages/img/1.jpg",
        zhengwentu2: "/pages/img/8.jpg",
        zhengwentu3: "/pages/img/9.jpg",
        zhengwentu4: "/pages/img/10.jpg",
        zhengwen: "全球十大豪车,迈特论丶法拉利垫底...",
        zuozhe: "新华社",
        zhuanfashu: "4",
        pinglunshu: "5",
        dianzanshu: "6"
      },
      {
        zhengwentu1: "/pages/img/1.jpg",
        zhengwentu2: "/pages/img/8.jpg",
        zhengwentu3: "/pages/img/9.jpg",
        zhengwentu4: "/pages/img/10.jpg",
        zhengwen: "全球十大豪车,迈特论丶法拉利垫底...",
        zuozhe: "新华社",
        zhuanfashu: "7",
        pinglunshu: "8",
        dianzanshu: "9"
      }
    ],

    zhengwen4: [{
      zhengwentu1: "/pages/img/1.jpg",
      zhengwentu2: "/pages/img/8.jpg",
      zhengwentu3: "/pages/img/9.jpg",
      zhengwentu4: "/pages/img/10.jpg",
      zhengwen: "全球十大豪车,迈特论丶法拉利垫底...",
      zuozhe: "新华社",
      zhuanfashu: "10",
      pinglunshu: "11",
      dianzanshu: "12"
    }],

    weibu: [{
      weibutupian1: "/pages/img/4.jpg",
      weibutupian2: "/pages/img/3.jpg",
      weibutupian3: "/pages/img/5.jpg",
      weibutupian4: "/pages/img/6.jpg",
      weibazi1: "用车",
      weibazi2: "买车",
      weibazi3: "车友",
      weibazi4: "我的"
    }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  Tiaozhaun: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  Tiaozhaun1: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  Tiaozhaun2: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  Tiaozhaun3: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  Tiaozhaun4: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})