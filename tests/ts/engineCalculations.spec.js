import { CarServiceTs } from '../../src/ts/carService.js';
import { EngineCalculationsTs } from '../../src/ts/engineCalculations.js';
//import * as TypeMoq from "../../node_modules/typemoq/src/typemoq.js";
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
// xdescribe("Engine Calculations TypeScript Tests Using TypeMoq", () => {
//     it("should calculate Horsepower metrics", () => {
//         //let service: CarServiceTs = new CarServiceTs;
//         const mockedService = TypeMoq.Mock.ofType(CarServiceTs);
//         const service = mockedService.object;
//         let engineCalc: EngineCalculationsTs = new EngineCalculationsTs(service);
//         engineCalc.calculations = {
//             weight: 3630,
//             et: 13.7
//         }
//         let hpCalcs = engineCalc.engineHorsepower(engineCalc.calculations);
//         expect(hpCalcs.flywheelHorsepower).toBe(320);
//         expect(hpCalcs.rearWheelHorsepower).toBe(279);
//     });
//     it("should preform horsepower calculations on data from carService", () => {
//         let service: CarServiceTs = new CarServiceTs;
//         let engineCalc: EngineCalculationsTs = new EngineCalculationsTs(service);
//         let cars = engineCalc.calculateCarData();
//         expect(cars[0].flywheelHorsepower).toBe(320);
//         expect(cars[0].rearWheelHorsepower).toBe(279);
//     });
// });
