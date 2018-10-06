//Module pattern using IIFE
var CarServiceJs = (function () {
//exports.CarServiceJs = function () {
    //locally scoped namespace
    var my = this;
    my.getCars = function () {
        return [
            { year: 2001, make: "Ford", model: "Mustang COBRA SVT", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3630, et: 13.7 },
            { year: 2014, make: "Ford", model: "Mustang Shelby GT500", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3845, et: 11.6 },
            { year: 2015, make: "Dodge", model: "Challenger Hellcat", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 4449, et: 12.1 },
            { year: 2015, make: "Chevy", model: "Corvette Z06", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3524, et: 11.3 },
            { year: 2015, make: "Ford", model: "Camaro ZL1", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 4120, et: 12.4 }
        ];
    };
    my.getCarsByYear = function (year) {
        return [
            { year: 2001, make: "Ford", model: "Mustang COBRA SVT", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3630, et: 13.7 }
        ];
    };
    my.getCarsAsync = function () {
        //Note: Promise is not supported by PhantomJS so this test will fail
        //ES6 PhantomJS Fail. The simple presence of this code will cause this file not to compile 
        //and thus make several tests fail that reference this class.
        return new Promise(function (resolve) {
            ////Some longer running API call...
            setTimeout(function () { return resolve(true); }, 500);
        });
    };
    return my;
//}
}());

//module.exports = CarServiceJs;