import { Simple } from '../../src/ts/classSimple.js';

describe("Simple Calculations", () => {

    it("should return true", () => {
        var simple: Simple = new Simple();
        expect(simple.easyTest()).toBe(5);
    });

});