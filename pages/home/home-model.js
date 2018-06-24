import {Base} from "../../utils/base";

class Home extends Base {
    /**
     * 构造函数
     */
    constructor() {
        super();
    }

    /**
     * 获取Banner列表
     * @param id bannerId
     * @param callback 回调函数
     */
    getBannerData(id, callback) {
        this.request({
            'url': 'banner/' + id,
            sCallback: function (data) {
                callback && callback(data.items);
            }
        });
    }

    /**
     * 首页主题
     * @param callback 回调函数
     */
    getThemeData(callback) {
        this.request({
            'url': 'theme?ids=1,2,3',
            sCallback: function (data) {
                callback && callback(data);
            }
        });
    }

    /**
     * 最近新品
     * @param callback 回调函数
     */
    getProductData(callback) {
        this.request({
            'url': 'product/recent',
            sCallback: function (data) {
                callback && callback(data);
            }
        });
    }
}

export {Home};