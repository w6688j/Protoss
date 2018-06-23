class Home {
    /**
     * 构造函数
     */
    constructor() {
    }

    /**
     * 获取Banner列表
     * @param id bannerId
     * @param callBack 回调函数
     */
    getBannerData(id, callBack) {
        wx.request({
            url: 'https://mp.w6688j.com/api/v1/banner/' + id,
            method: 'GET',
            success: function (res) {
                callBack(res.data);
            }
        })
    }
}

export {Home};