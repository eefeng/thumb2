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
                const result = JSON.parse(res);
                if(result) {
                    resolve({result})
                } else {
                    reject({})
                }
            })
        })
    }
}

