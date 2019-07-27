const app = getApp();

//Page Object
Page({
    data: {
        videos: [],
    },
    //options(Object)
    onLoad: function(options){
        const videos = app.globalData.discovery;

        this.setData({
            videos
        })
    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    }
});