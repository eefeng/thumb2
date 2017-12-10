import superTest from 'supertest';
import app from '../app_o';

function request() {
    return superTest(app.listen());
}

describe('测试路由', function() {
    it('点赞', function(done) {
        request()
            .get('/index/update')
            .expect(200)
            .end(function (err, res) {
                console.log(res.bodyres);
                if(res.body.res === 1) {
                    return done(err);
                }
                done();
            })
    });
});