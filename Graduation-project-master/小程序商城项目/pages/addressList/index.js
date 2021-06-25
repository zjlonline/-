// pages/addressList/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {mobile:15172446666,name:"zjl",city:["广东省","广州市","从化区"],detailed:"广州大学华软软件学院",_id:1},
    ],
    id:1,
    state:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  defaultFun:function(data){
    this.setData({
      id: data.currentTarget.dataset.item._id
    })

  },
  onLoad: function (options) {
   
    // this.setData({
    //   id: app.globalData.userInfo.address._id,
    //   state: options ? options.type:null
    // })
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
    var list=[]
    var addlist = wx.getStorageSync('addlist');
    this.data.list.forEach(ele => {
      list.push(ele)
    });
    if(typeof(addlist)=="object"){
      list.push(addlist.addlist)
      this.setData({
            list
          })
    }
    
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