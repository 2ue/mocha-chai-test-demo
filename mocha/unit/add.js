var add = require('../../src/add');
var expect = require('chai').expect;

describe('加法函数', function () {
    it('1 + 3 = 4', function () {
        expect(add(1, 3)).to.be.equal(4);
    });
});
