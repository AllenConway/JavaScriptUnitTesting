/// <reference path="../../src/js/carService.js" />

describe("Async calls using the jasmine done callback", function () {
    let result = false;
    beforeEach(function (done) {
        setTimeout(function () {
            result = true;
            done();
        }, 100);
    });
    it("should wait until the done callback is called and return the result of the fulfilled promise", function () {
        expect(result).toEqual(true);
    });
});
describe("Async calls using the jasmine clock and tick functions", function () {
    beforeEach(function () {
        jasmine.clock().install();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it("should tick the clock forward and return the result of the fulfilled promise", function () {
        let result = false;
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(result = true);
            }, 100);
        });
        jasmine.clock().tick(101);
        expect(result).toEqual(true);
    });
});
describe("Async calls using jasmine done callback via an async service call", function () {
    let flag = false;
    beforeEach(function (done) {
        CarServiceJs.getCarsAsync()
            .then(function (result) {
                flag = result;
                //Invoke the jasmine done callback
                done();
            });
    });
    it("should be true once the service call promise is fulfilled", function () {
        expect(flag).toEqual(true);
    });
    afterEach(function () {
        flag = false;
    });
});