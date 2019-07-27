// 跳转展示商品详情的公共js文件
export const showDetail = (e) => {
    const id = e.currentTarget.dataset.pid;
    console.log('id', id);
    wx.navigateTo({
        url: `/pages/goods/show?id=${id}`,
        success: (result)=>{
            
        },
        fail: ()=>{},
        complete: ()=>{}
    });
}