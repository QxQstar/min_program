Component({
  properties:{
    login:{
      type:Boolean,
      value:false
    },
    idx:{
      type:Number,
      value:1
    }
  },
  data:{
    navList:[
      {
        text:'首页',
        link:'/pages/index'
      },
      {
        text:'分类',
        link:'/pages/classification'
      },
      {
        text:'我的收藏',
        link:'/pages/collecttion'
      }
    ]
  },
  methods:{
    toLogin() {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  }
  
})