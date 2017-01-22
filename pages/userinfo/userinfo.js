var app = getApp();
Page({
    data: {
        mapConfig: {},
        isShowMap: true
    },
    onLoad: function () {
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        });

        wx.getLocation({
            // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            type: 'wgs84', 
            success: function (res) {
                // success
                var latitude = res.latitude;
                var longitude = res.longitude;
                that.setData({
                    'mapConfig.longitude': longitude,
                    'mapConfig.latitude': latitude,
                    'mapConfig.markers': [{latitude: latitude, longitude: longitude}]
                });
            },
            fail: function () {
                // fail
                that.setData({
                    isShowMap: false
                })
            },
            complete: function () {
                // complete
            }
        });
    }
})