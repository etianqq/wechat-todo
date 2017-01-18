var util = require('../../utils/util');

Page({
    data: {},
    onLoad: function(option) {
        var todoId = option.id;
        // get todo list
        var todos = wx.getStorageSync('todos');
        this.setData({
                todos: todos,
            })
        var currentTodo, currentTodoIndex;
        todos.some(function(todo, index){
            if(todo.id == todoId) {
                currentTodo = todo;
                currentTodoIndex = index;
                return true;
            }        
            return false;
        });
        if (currentTodo){
            currentTodo.isEditMode = false;
            currentTodo.createTimeText = util.formatTime(currentTodo.createTime);
            this.setData({
                todo: currentTodo,
                currentTodoIndex: currentTodoIndex
            })
        }
    },
    edit: function(){
        this.setData({
            "todo.isEditMode": true
        });
    },
    delete: function(){
        var self = this;
        wx.showModal({
            title: '确认删除？',
            success: function(res){
                if (res.confirm){
                    self.data.todos.splice(self.data.currentTodoIndex, 1);
                    wx.setStorageSync('todos', self.data.todos);
                    self.back();
                }
            }
        });
    },
    cancel: function(){
        this.setData({
            "todo.isEditMode": false
        });
    },
    back: function(){
        wx.redirectTo({
           url: '../index/index'
        })
    },
    bindFormSubmit: function(e){
        var text = e.detail.value.todoText;
        if (text.trim() === '') {
            wx.showToast({
                title: '内容不能为空',
                mask: true    
            });
            return;
        }
        
        this.data.todos[this.data.currentTodoIndex].text = text;
        wx.setStorageSync('todos', this.data.todos);
        wx.redirectTo({
            url: '../index/index'
        }); 
    },
})