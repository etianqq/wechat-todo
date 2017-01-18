//create.js
//获取应用实例
var app = getApp();
Page({
    data: {},
    bindFormSubmit: function(e){
        var text = e.detail.value.todoText;
        if (text.trim() === '') {
            wx.showToast({
                title: '内容不能为空',
                mask: true    
            });
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
        //todo  
    }
});