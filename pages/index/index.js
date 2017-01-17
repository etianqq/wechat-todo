//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    todos: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    // get todo list
    var todos = wx.getStorageSync('todos');
    todos.forEach(function(todo){
        todo.createTimeText = new Date(todo.createTime).toDateString();
        todo.isDelete = false;
    });
    that.setData({todos: todos});
  },
  onShareAppMessage: function(){
    return {
      title: '分享我的TODO',
      desc: '我的TODO列表',
      path: '/page/user?id=123'
    }
  },
  createTodo: function(){
    wx.redirectTo({
      url: '../create/create'
    });
  },
  showDeleteBtn: function(event){
    var index = event.currentTarget.id;
    var deletedTodo = "todos["+index+"].text";
    this.setData({
       deletedTodo: true
    });
  },
  deleteTodo: function(index){
    this.todos.splice(index, 1);
    wx.setStorageSync('todos', this.todos);
  }
})
