var Async = require('../../src/async');
var expect = require('chai').expect;
var axios = require('axios');

//非promise异步一定要带上done()标记通知已经完成任务

describe('异步获取数据', function () {

    it('获取谷歌url', function () {
        var getUrl = new Promise(function (resolve, reject) {
            Async.getUrl('https://www.google.com', function (res) {
                resolve(res);
            });
        });
        getUrl.then(function(res){
            expect(res).to.be.equal('https://www.google.com');
        })
    });

    it('异步请求应该返回一个对象', function (done) {
        axios
            .get('https://api.github.com')
            .then(function (response) {
                expect(response).to.be.an('object');
                done();
            });
    });

});