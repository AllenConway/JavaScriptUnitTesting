import { CarServiceTs } from '../../src/ts/carService.js';
import { EngineCalculationsTs } from '../../src/ts/engineCalculations.js';
describe("Engine Calculations TypeScript Tests", function () {
    it("should calculate Horsepower metrics", function () {
        var service = new CarServiceTs;
        var engineCalc = new EngineCalculationsTs(service);
        engineCalc.calculations = {
            weight: 3630,
            et: 13.7
        };
        var hpCalcs = engineCalc.engineHorsepower(engineCalc.calculations);
        expect(hpCalcs.flywheelHorsepower).toBe(320);
        expect(hpCalcs.rearWheelHorsepower).toBe(279);
    });
    it("should preform horsepower calculations on data from carService", function () {
        var service = new CarServiceTs;
        var engineCalc = new EngineCalculationsTs(service);
        var cars = engineCalc.calculateCarData();
        expect(cars[0].flywheelHorsepower).toBe(320);
        expect(cars[0].rearWheelHorsepower).toBe(279);
    });
});
