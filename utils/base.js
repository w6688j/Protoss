import {Config} from "./config";

class Base {

    /**
     * 构造函数
     */
    constructor() {
        this.baseRequestUrl = Config.restUrl;
    }

    /**
     * Http请求
     * @param params 请求参数
     */
    request(params) {
        let url = this.baseRequestUrl + params.url;
        wx.request({
            url: url,
            data: params.data,
            method: params.type ? params.type : 'GET',
            header: {
                'content-type': 'application/json',
                'token': wx.getStorageSync('token')
            },
            success: function (res) {
                params.sCallback && params.sCallback(res.data);
            },
            fail: function (err) {
                console.log(err);
            }
        });
    }

    /**
     * 获取元素上的绑定值
     * @param event 事件
     * @param key
     * @returns {string | undefined}
     */
    getDataSet(event, key) {
        return event.currentTarget.dataset[key];
    }
}

export {Base};