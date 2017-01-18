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
    this.updateTodoItemDeleteStatus(this, index, true);
  },
  deleteTodo: function(event){
    var index = parseInt(event.target.dataset.index);
    var self = this;
    wx.showModal({
      title: '确认删除？',
      success: function(res){
        if (res.confirm){
            self.data.todos.splice(index, 1);
            self.setData({
              todos: self.data.todos
            });
            wx.setStorageSync('todos', self.data.todos);
        }
        else {
          self.updateTodoItemDeleteStatus(self, index, false);
        }
      }
    });
  },
  updateTodoItemDeleteStatus: function(target, index, isDelete){
    target.data.todos[index].isDelete = isDelete;
    target.setData({
      todos: target.data.todos
    });      
  }
})
