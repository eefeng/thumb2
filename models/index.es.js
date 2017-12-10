import request from 'request'
import rp from 'request-promise'

export default class IndexModel {
    constructor(ctx) {
        this.ctx = ctx;
    }

    updateNum() {
        const opts ={
            uri: 'http://localhost/GFE/praise.php',
            method: 'get'
        }
        return new Promise((resolve, reject) => {
            rp(opts).then((res) => {
                const info = JSON.parse(res);
                if(info) {
                    resolve({data: info.res})
                } else {
                    reject({})
                }
            })
        })
    }
}

