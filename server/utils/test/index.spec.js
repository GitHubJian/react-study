const should = require('should');
const { getParamsFromUrl } = require('./../index');

describe('Test Index', () => {
    it('Test getParamsFromUrl', () => {
        let query = getParamsFromUrl('http://www.baidu.com?kw=1');
        should.equal(query['kw'], 1, `It's true`);
    });
});
