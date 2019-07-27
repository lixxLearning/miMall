import mock from "./utils/mock";

//app.js
App({
  onLaunch: function () {
    Object.assign(this.globalData,mock);
  },
  globalData: {
    userInfo: null
  }
})