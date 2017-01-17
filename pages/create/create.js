//create.js
//获取应用实例
var app = getApp();
Page({
    data: {
        isValid: true
    },
    bindFormSubmit: function(e){
        var text = e.detail.value.todoText;
        if (text.trim() === '') {
            this.setData({isValid: false});
            return;
        }
        
        var todos = wx.getStorageSync('todos');
        todos.push({id: todos[todos.length - 1].id, text: text, createTime: new Date()});
        wx.setStorageSync('todos', todos);
        wx.redirectTo({
            url: '../index/index'
        }); 
    },
    cancel: function(){
       wx.redirectTo({
            url: '../index/index'
        }); 
    },
    textareaFocus: function(){
        this.setData({isValid: true});   
    }
});