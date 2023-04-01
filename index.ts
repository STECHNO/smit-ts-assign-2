abstract class Vehicle {
  private _make: string;
  private _model: string;
  private _year: number;
  private _rented: boolean = false;

  constructor(make: string, model: string, year: number, rented: boolean) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._rented = rented;
  }

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
    this._rented = isRented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.rented) {
      console.log(`Sorry! ${this._make} ${this._model} is already rented.`);
    } else {
      this.rented = true;
      console.log(
        `Congratulations! ${this._make} ${this._model} has been rented successfully.`
      );
    }
  }

  return(): void {
    if (this.rented) {
      this.rented = false;
      console.log(`${this._make} ${this._model} has been returned.`);
    } else {
      console.log(`${this._make} ${this._model} has not been rented yet.`);
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

const myBike = new Motorcycle("Yamaha", "YBR", 2023, false, "manual", 10, 5, 4);

myBike.rent();
console.log("isRented", myBike.rented);
myBike.return();
console.log("isRented", myBike.rented);

const myCar = new Car("Tesla", "Model-X", 2023, false, 4, 5, true);

myCar.rent();
console.log("isRented", myCar.rented);
myCar.return();
console.log("isRented", myCar.rented);

const myTruck = new Truck("Hino", "WU- 720", 2023, false, "diesel", 1000, 2);

myTruck.rent();
console.log("isRented", myTruck.rented);
myTruck.return();
console.log("isRented", myTruck.rented);
