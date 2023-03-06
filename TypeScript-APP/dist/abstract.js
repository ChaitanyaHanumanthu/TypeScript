"use strict";
// Take an abstract class MobileManufacturingProcess
//     //makingOfPCB
//     //makingOfCamera
//     //makingOfBattery
//     //makingOfCase
//     //assembleAllParts
// Write a class that can make PCB and camera
// Write another class that can make battery
// Write a class that can make case
// Write a class that can assemble all parts and instantiate a Mobile
// class mobile
class MobileManufacturingProcess {
    makingOfPCB() {
        console.log("PCB Ready");
    }
    makingOfCamera() {
        console.log("Camera ready");
    }
}
class batteryMaker extends MobileManufacturingProcess {
    makingOfBattery() {
        console.log("Battery done");
    }
}
class caseMaker extends batteryMaker {
    makingOfCase() {
        console.log("Case prepared");
        console.log(this.makingOfBattery());
        console.log(this.makingOfCamera());
        console.log(this.makingOfPCB());
    }
}
let Mobile = new caseMaker();
console.log(Mobile.makingOfCase(), Mobile.makingOfBattery());
