abstract class Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    private _year: number,
    private _rented: boolean
  ) {}
  get make() {
    return this._make;
  }
  get model() {
    return this._model;
  }
  get year() {
    return this._year;
  }

  get rented() {
    return this._rented;
  }

  set rented(isRented: boolean) {
    if (!isRented) {
      throw new Error("Vehicle must be rented");
    }
    this._rented = isRented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.rented) {
      throw new Error("Vehicle is already rented");
    } else {
      this.rented = true;
    }
  }

  return(): void {
    if (this.rented) {
      throw new Error("Vehicle is already rented");
    } else {
      this.rented = false;
    }
  }
}

class Motorcycle extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    private _transmissionType: string,
    private _fuelCapacity: number,
    private _fuelConsumption: number,
    private _engineType: number
  ) {
    super(make, model, year, rented);
  }
  rentalRate(): number {
    return 1000;
  }

  get transmissionType() {
    return this._transmissionType;
  }

  get fuelCapacity() {
    return this._fuelCapacity;
  }

  get fuelConsumption() {
    return this._fuelConsumption;
  }

  get engineType() {
    return this._engineType;
  }
}

const myBike = new Motorcycle("Yamaha", "YBR", 2023, false, "manual", 10, 5, 4);

myBike.rent();
console.log(myBike.rented);
myBike.return();
console.log(myBike.rented);

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    private _doors: number,
    private _passengersCapacity: number,
    private _airConditioned: boolean
  ) {
    super(make, model, year, rented);
  }
  rentalRate(): number {
    return 2000;
  }

  get doors() {
    return this._doors;
  }

  get passengersCapacity() {
    return this._passengersCapacity;
  }

  get airConditioned() {
    return this._airConditioned;
  }
}

const myCar = new Car("Tesla", "Model-X", 2023, false, 4, 5, true);

myCar.rent();
console.log(myCar.rented);
myCar.return();
console.log(myCar.rented);

class Truck extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    private _fuelType: string,
    private _loadCapacity: number,
    private _numberOfAxles: number
  ) {
    super(make, model, year, rented);
  }
  rentalRate(): number {
    return 3000;
  }

  get fuelType() {
    return this._fuelType;
  }

  get loadCapacity() {
    return this._loadCapacity;
  }

  get numberOfAxles() {
    return this._numberOfAxles;
  }
}

const myTruck = new Truck("Hino", "WU- 720", 2023, false, "diesel", 1000, 2);
myTruck.rent();
console.log(myTruck.rented);
myTruck.return();
console.log(myTruck.rented);
