import {Base} from "../../utils/base";

class Theme extends Base {
    constructor() {
        super();
    }

    /**
     * 获取主题下的商品列表
     * @param id 主题id
     * @param callback 回调函数
     */
    getProductsData(id, callback) {
        this.request({
            'url': 'theme/' + id,
            sCallback: function (data) {
                callback && callback(data);
            }
        });
    }
}

export {Theme};