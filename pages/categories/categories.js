//Page Object
const app = getApp();

Page({
    data: {
        cate_nav_list:[
            {name:"新品",id:"new"},
            {name:"手机",id:"phone"},
            {name:"电视",id:"tv"},
            {name:"电脑",id:"laptop"},
            {name:"家电",id:"appliance"},
            {name:"路由",id:"router"},
            {name:"智能",id:"smart"},
            {name:"儿童",id:"kids"},
            {name:"灯具",id:"lignts"},
            {name:"电源",id:"adapter"},
            {name:"耳机",id:"headset"},
            {name:"音箱",id:"voicebox"},
            {name:"生活",id:"life"},
            {name:"服务",id:"service"},
            {name:"米粉卡",id:"card"}
        ],
        curIndex:0,
        toView: 'new',
        detail:[] 
    },
    /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function(options){
        // 获取分类数据
        const detail = app.globalData.category;

        this.setData({
            detail
        })
        
    },

    /**
   * 生命周期函数--监听页面初次渲染完成
   */
    onReady: function(){
        
    },

    /**
   * 生命周期函数--监听页面显示
   */
    onShow: function(){
        
    },

    /**
   * 生命周期函数--监听页面隐藏
   */
    onHide: function(){

    },

    /**
   * 生命周期函数--监听页面卸载
   */
    onUnload: function(){

    },

    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh: function(){

    },

    /**
   * 页面上拉触底事件的处理函数
   */
    onReachBottom: function(){

    },

    /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function(){

    },

    /**
   * 页面滚动触发事件的处理函数
   */
    onPageScroll(e){
        console.log('e', e)
    },

    /**
   * 当前是 tab 页时，点击 tab 时触发
   */
    onTabItemTap:function(item){

    },

    // 左列表分类点击事件
    switchCategory(e) {
        console.log('e', e);
        const curIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
        const toView = e.currentTarget.dataset.id ? e.currentTarget.dataset.id : 'new';

        this.setData({
            curIndex,
            toView
        })
    },
});