import { Simple } from '../../src/ts/classSimple.js';
describe("Simple Calculations", function () {
    it("should return true", function () {
        var simple = new Simple();
        expect(simple.easyTest()).toBe(5);
    });
});
