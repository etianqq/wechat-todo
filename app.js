//app.js
App({
  onLaunch: function () {
    var number = 5;
    var todos = [];
    for (var index = 0; index < number; index++){
      todos.push({id: index, text: 'it is todo ' + (index+1), createTime: new Date()});
    }
    wx.setStorageSync('todos', todos);
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})