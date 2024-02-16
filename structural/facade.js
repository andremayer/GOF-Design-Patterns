class Engine {
  constructor() {
    this.isOn = false;
  }

  start() {
    this.isOn = true;
    console.log("Engine started");
  }

  stop() {
    this.isOn = false;
    console.log("Engine stopped");
  }
}

class Lights {
  constructor() {
    this.areOn = false;
  }

  turnOn() {
    this.areOn = true;
    console.log("Lights turned on");
  }

  turnOff() {
    this.areOn = false;
    console.log("Lights turned off");
  }
}

class AirConditioning {
  constructor() {
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log("Air conditioning turned on");
  }

  turnOff() {
    this.isOn = false;
    console.log("Air conditioning turned off");
  }
}

class CarFacade {
  
  constructor() {
    this.engine = new Engine();
    this.lights = new Lights();
    this.airConditioning = new AirConditioning();
  }

  startCar() {
    this.engine.start();
    this.lights.turnOn();
    this.airConditioning.turnOn();
    console.log("Car started!");
  }

  stopCar() {
    this.engine.stop();
    this.lights.turnOff();
    this.airConditioning.turnOff();
    console.log("Car stopped!");
  }
}

const car = new CarFacade();
car.startCar();
car.stopCar();
