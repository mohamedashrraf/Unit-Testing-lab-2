
const { expect, should, assert } = require('chai');
const { createArray } = require("../index.js");

describe('createArray', function () {
    it('should return an array', function () {
        const result = createArray(3);
        expect(result).to.be.an('array');
    });

    it('should return an array of the specified length', function () {
        const result = createArray(4);
        expect(result).to.have.lengthOf(4);
    });

    it('should include the numbers from 0 to n-1', function () {
        const result = createArray(7);
        expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6]);
    });

    it('should handle 0 as input', function () {
        const result = createArray(0);
        expect(result).to.be.empty;
    });

    // Pending test case
    it('should have a pending test');


    //shold
    it('should have length 3 (using "should")', function () {
        const result = createArray(3);
        result.should.have.lengthOf(3);
    });

    //assert
    it('should include 1 (using "assert")', function () {
        const result = createArray(3);
        assert.include(result, 1);
    });
});
