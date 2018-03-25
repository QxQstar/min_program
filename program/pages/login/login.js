// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  goIndex(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  changeValue(event){
   const detail = event.detail;
   const id = event.currentTarget.id;
   if (id === 'username'){
     this.setData({
       username: detail.value
     });
   } else {
     this.setData({
       password: detail.value
     });
   }
   
  },
  submit(){
    const username = this.data.username.replace(/^\s+|\s+$/g,'');
    const pw = this.data.password.replace(/^\s+|\s+$/g,'');
    if(username.length <= 0){
      wx.showToast({
        title: '请输入用户名',
        icon: 'none'
      })
    } else if (pw.length <= 0){
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '登录成功！'
      })
      app.globalData.token = true;
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
    
  }
})