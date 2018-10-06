describe("basic jasmine unit tests", function () {

    describe('simple matchers', function() {
        
        it("should be true", function () {
            expect(true).toBe(true);
        });

        it("should be equal", function () {
            expect('Hello').toEqual('Hello');
        });

        it("should be greater than value", function () {
            expect(10).toBeGreaterThan(9);
        });

        it("should contain the array element", function() {
            var myArray = [1,2,3,4,5];
            expect(myArray).toContain(2);
        });

        it("should be close to value with specified precision", function () {
            //2nd value is the precision after decimal; the default is '2'
            expect(5.1349).toBeCloseTo(5.135, 3);
        });

    });

    describe("using asymmetric equality testers", function() {
        
        it("should match corresponding values using the any tester", function() {
            var myNumber = 9;
            var myString = "Hello";
            var myObject = {};

            expect(myNumber).toEqual(jasmine.any(Number));
            expect(myString).toEqual(jasmine.any(String));
            expect(myObject).toEqual(jasmine.any(Object));
        });

        it('should return true with valid value is not null or undefined using anything tester', function() {
            var myValue = 1;
            var myObject = null;
            
            expect(myValue).toEqual(jasmine.anything());
            expect(myObject).not.toEqual(jasmine.anything());
        });

    });

    describe("using beforeEach and afterEach", function () {
        var personTest;
        var Person = function () {
            this.name = "";
        };
        beforeEach(function () {
            personTest = new Person();
            personTest.name = "Allen Conway";
        });
        it("the Person object should not be null", function () {
            expect(personTest).not.toBe(null);
        });
        it("the Person name should be Allen Conway", function () {
            expect(personTest.name).toEqual("Allen Conway");
        });
        afterEach(function () {
            //Some required cleanup
            personTest = null;
        });
    });

});