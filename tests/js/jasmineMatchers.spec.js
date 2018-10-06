describe("jasmine built in matchers unit tests", function () {

    beforeEach(function () {
        this.boolTest = true;
        this.person = {
            firstName: "Allen",
            lastName: "Conway"
        };
    });

    it("should be equal", function () {
        expect('Hello').toEqual('Hello');
    });

    it("boolTest should be truthy", function () {
        expect(this.boolTest).toBeTruthy();
    });

    it("boolTest should be true", function () {
        expect(this.boolTest).toBe(true);
    });

    it("should be null", function () {
        var obj = null;
        expect(obj).toBeNull();
    });

    it("testx should be greater than testz", function () {
        var testx = 5;
        var testz = 1;
        expect(testx).toBeGreaterThan(testz);
    });

    it("should contain element with value 2 in the array", function() {
        var myArray = [1,2,3,4,5];
        expect(myArray).toContain(2);
    });

    it("should not contain element with value 10 in the array", function () {
        var myArray = [1, 2, 3, 4, 5];
        expect(myArray).not.toContain(10);
    });
    
    it("should have person matching return data", function () {
        var returnData = {
            firstName: "Allen",
            lastName: "Conway"
        };
        expect(returnData).toEqual(this.person);
    });
});