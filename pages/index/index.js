//index.js
//获取应用实例
import { showDetail } from '../../modules/showDetail'
import { showcDetail } from '../../modules/showcDetail'
const app = getApp();

Page({
  data: {
    isTap:false,
    index_slides:[],  // 轮播图数据
    nav_data: [],
    index_activity: [],
    index_block: [],
    sectionList: []
  },
  //事件处理函数
  onLoad() {
    const index_slides=app.globalData.index_slides; 
    const nav_data = app.globalData.nav_data;
    const index_activity = app.globalData.index_activity;
    const index_block=app.globalData.index_block;
    const sectionList = index_block.map(item => item.section);

    this.setData({
      index_slides,
      nav_data,
      index_activity,
      index_block,
      sectionList
    })
  },

  onShow() {
    this.setData({
      isTap: false
    })
  },

  toSearch() {  // 点击搜索栏
    this.setData({
      isTap: true
    });

    wx.navigateTo({
      url: '../search/search',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  showDetail,

  showcDetail,
})
