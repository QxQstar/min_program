//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotList:[],
    loading:true,
    token: !!app.globalData.token,
  },
  onLoad(){
    this.data.hotList = app.globalData.allGift.filter(gift => !!gift.hot);
    this.setData({
      loading:false,
      hotList: this.data.hotList,
      token: !!app.globalData.token
    })
  }
})
