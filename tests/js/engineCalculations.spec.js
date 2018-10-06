/// <reference path="../../src/js/engineCalculations.js" />
// var CarServiceJs = require("../../src/js/carService.js");
// var EngineCalculationsJs = require("../../src/js/engineCalculations.js");

describe("Engine Calculations", function () {
    it("should calculate Horsepower metrics", function () {
        //Arrange        
        var service = CarServiceJs;
        var engineCalc = new EngineCalculationsJs(service);
        engineCalc.calculations = {
            weight: 3630,
            et: 13.7
        };
        //Act
        var hpCalcs = engineCalc.engineHorsepower(engineCalc.calculations);
        //Assert
        expect(hpCalcs.flywheelHorsepower).toBe(320);
        expect(hpCalcs.rearWheelHorsepower).toBe(279);
    });
    it("should preform horsepower calculations on data from carService", function () {
        var service = CarServiceJs;
        var engineCalc = new EngineCalculationsJs(service);
        var cars = engineCalc.calculateCarData();
        expect(cars[0].flywheelHorsepower).toBe(320);
        expect(cars[0].rearWheelHorsepower).toBe(279);
    });
});