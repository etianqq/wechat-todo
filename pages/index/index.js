//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util');
Page({
  data: {
    todos: []
  },
  onLoad: function () {
    // get todo list
    var todos = wx.getStorageSync('todos');
    todos.forEach(function(todo){
        todo.createTimeText = util.formatTime(todo.createTime);
        todo.isDelete = false;
    });
    this.setData({todos: todos});
  },
  onShareAppMessage: function(){
    return {
      title: '分享我的TODO',
      desc: '我的TODO列表',
      path: '/page/index'
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
