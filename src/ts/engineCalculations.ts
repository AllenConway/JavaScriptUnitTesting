// /// <reference path="./carService.ts" />
import { Car, CarServiceTs } from './carService';

export interface Calculations {
    weight: number;
    et: number;
}

export interface HorsepowerCalculations {
    rearWheelHorsepower: number;
    flywheelHorsepower: number;
}

export class EngineCalculationsTs {

    constructor(private service: CarServiceTs) {
        
    }

    public horsepowerCalculations: HorsepowerCalculations = {
        rearWheelHorsepower: 0,
        flywheelHorsepower: 0
    }

    public calculations: Calculations = {
        weight: 0,
        et: 0
    };

    public engineHorsepower = (calculations:Calculations):HorsepowerCalculations => {
        let hpCalc = calculations.et / 5.825;
        let rwHorsepower = Math.round((calculations.weight / Math.pow(hpCalc, 3)));

        //15 percent drivetrain loss on wheel and increase at flywheel (engine horsepower)
        let flywheelHP = (rwHorsepower * 1.146);
        let fwHorsepower = Math.round(flywheelHP);

        return this.horsepowerCalculations = {
            rearWheelHorsepower: rwHorsepower,
            flywheelHorsepower: fwHorsepower
        }
    }

    public calculateCarData = ():Car[] => {

        let cars:Car[] = this.service.getCars();

        if (typeof cars !== "undefined") {
            //for (var car of cars) {
            for (let i = 0, c = cars; i < c.length; i++) {
                let car = c[i];
                let calc: Calculations = {
                    weight: car.weight,
                    et: car.et
                }

                let hpCalcs: HorsepowerCalculations = this.engineHorsepower(calc);
                car.rearWheelHorsepower = hpCalcs.rearWheelHorsepower;
                car.flywheelHorsepower = hpCalcs.flywheelHorsepower;
            }
        }

        return cars;

    }
};