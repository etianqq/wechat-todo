//create.js
//获取应用实例
var app = getApp();
Page({
    cancel: function(){
       wx.redirectTo({
        url: '../index/index'
    }); 
    }
});