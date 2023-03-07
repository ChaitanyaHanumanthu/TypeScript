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
abstract class MobileManufacturingProcess {
  makingOfPCB(): void {
    console.log("PCB Ready");
  }
  makingOfCamera(): void {
    console.log("Camera ready");
  }
  abstract makingOfBattery(): void;
  abstract makingOfCase(): void;
}

abstract class batteryMaker extends MobileManufacturingProcess {
  makingOfBattery(): void {
    console.log("Battery done");
  }
}

class caseMaker extends batteryMaker {
  makingOfCase(): void {
    console.log("Case prepared"); 
    console.log(this.makingOfBattery());
    console.log(this.makingOfCamera());
    console.log(this.makingOfPCB());
  }
}

let Mobile = new caseMaker();
console.log(Mobile.makingOfCase(), Mobile.makingOfBattery());
 