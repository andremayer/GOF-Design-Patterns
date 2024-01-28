class OldCar {
    startByHandCranking() { console.log("startByHandCranking") }
    pumpTheBrakes() { console.log("pumpTheBrakes") }
}

class NewCar {
    startWithKey() { console.log("startWithKey") }
    pressAntiLockBrakes() { console.log("pressAntiLockBrakes") }
}

// Adapter constructor
class CarAdapter {
    constructor() {
        const car = new NewCar();

        // add the old interface to the returned object
        this.startByHandCranking = () => {
            return car.startWithKey();
        };

        this.pumpTheBrakes = () => {
            return car.pressAntiLockBrakes();
        };
    }
}

// client code
const modernCarAdapter = new CarAdapter();

modernCarAdapter.startByHandCranking();
modernCarAdapter.pumpTheBrakes();