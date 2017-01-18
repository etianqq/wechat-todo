//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util');
Page({
  data: {
    todos: []
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
        todo.createTimeText = util.formatTime(todo.createTime);
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
    this.updateTodoItemDeleteStatus(this, index, true);
  },
  goToDetailView: function(event){
    var id = event.currentTarget.id; 
    wx.redirectTo({
      url: '../detail/detail?id='+id
    });
  },
  updateTodoItemDeleteStatus: function(target, index, isDelete){
    target.data.todos[index].isDelete = isDelete;
    target.setData({
      todos: target.data.todos
    });      
  }
})
