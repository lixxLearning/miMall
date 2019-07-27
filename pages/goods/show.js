const app = getApp();

//Page Object
Page({
    // 初始数据
    data: {
        goods: [],  // 商品详情页数据
        selecte: true,   // 概述tab选中状态 
        goods_num: "",  // 购物车商品数量
    },
    //options(Object)
    onLoad: function(options){
        console.log('options', options);
        // 获取路由跳转传来的参数
        const id = options.id;
        // 从app实例拿到详情页数据
        const goods = app.globalData.goodsDetail.filter(item => {
            return item.id = id;
        });
        this.setData({
            goods: goods[0],
        })

    },
    onReady: function(){
        // 将用户选好的商品规格从缓存拿出来
        const goods_num = wx.getStorageSync('goods_sum');
        this.setData({
            goods_num
        })
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

    },

    // 概述点击事件
    selectBrief() {
        this.setData({
            selecte: true
        })
    },

    // 参数点击事件
    selectParameter() {
        this.setData({
            selecte: false
        })
    },

    //点击加入购物车按钮跳到商品属性选择页面
    toSelect(e) {
        const id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `../selectGoods/selectGoods?id=${id}`,
        });
    },

    // 购物车点击事件
    goCart(e) {
        // 跳转到tabBar页面
        wx.switchTab({
            url: '../cart/cart',
        });
    },

    // 轮播跳转
    previewImage(e) {
        // 获取轮播图下标
        const index = e.currentTarget.dataset.index;
        // 获取商品轮播图
        const side = this.data.goods.goods_slides;
        // 定义个数组存放image的Url
        const imgList = [];
        
        for(item of side) {
            imgList.push(item.slide_url);
        }

        // 在新页面中全屏预览图片
        wx.previewImage({
            current: imgList[index],    // 当前显示图片的链接，不填则默认为 urls 的第一张
            urls: imgList,
        });
    }
});