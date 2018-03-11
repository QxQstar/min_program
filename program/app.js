//app.js
const data = require('/data.js');
const globalFn = require('/global.js')
App({
  onLaunch: function () {
    this.globalData.token = globalFn.checkLogin();
  },
  globalData: {
    token:null,
    allGift: data.allGift,
    collection: data.collection,
    style: data.style,
    relation: data.relation
  }
})