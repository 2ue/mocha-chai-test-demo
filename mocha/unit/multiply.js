var multiply = require('../../src/multiply');
//The Expect / Should API covers the BDD assertion styles.
//The Assert API covers the TDD assertion style.
var should = require('chai').should();

describe('乘法函数', function () {
    it('2 * 3 = 6', function () {
        multiply(2, 3).should.to.be.equal(6);
    });
});