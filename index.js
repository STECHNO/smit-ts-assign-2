var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    Object.defineProperty(Vehicle.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "rented", {
        get: function () {
            return this._rented;
        },
        set: function (isRented) {
            if (!isRented) {
                throw new Error("Vehicle must be rented");
            }
            this._rented = isRented;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            throw new Error("Vehicle is already rented");
        }
        else {
            this.rented = true;
        }
    };
    Vehicle.prototype.return = function () {
        if (this.rented) {
            throw new Error("Vehicle is already rented");
        }
        else {
            this.rented = false;
        }
    };
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, _transmissionType, _fuelCapacity, _fuelConsumption, _engineType) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._transmissionType = _transmissionType;
        _this._fuelCapacity = _fuelCapacity;
        _this._fuelConsumption = _fuelConsumption;
        _this._engineType = _engineType;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 1000;
    };
    Object.defineProperty(Motorcycle.prototype, "transmissionType", {
        get: function () {
            return this._transmissionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelConsumption", {
        get: function () {
            return this._fuelConsumption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "engineType", {
        get: function () {
            return this._engineType;
        },
        enumerable: false,
        configurable: true
    });
    return Motorcycle;
}(Vehicle));
var myBike = new Motorcycle("Yamaha", "YBR", 2023, false, "manual", 10, 5, 4);
myBike.rent();
console.log(myBike.rented);
myBike.return();
console.log(myBike.rented);
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, _doors, _passengersCapacity, _airConditioned) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._doors = _doors;
        _this._passengersCapacity = _passengersCapacity;
        _this._airConditioned = _airConditioned;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 2000;
    };
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "passengersCapacity", {
        get: function () {
            return this._passengersCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "airConditioned", {
        get: function () {
            return this._airConditioned;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, _fuelType, _loadCapacity, _numberOfAxles) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._fuelType = _fuelType;
        _this._loadCapacity = _loadCapacity;
        _this._numberOfAxles = _numberOfAxles;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 3000;
    };
    Object.defineProperty(Truck.prototype, "fuelType", {
        get: function () {
            return this._fuelType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Truck.prototype, "loadCapacity", {
        get: function () {
            return this._loadCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Truck.prototype, "numberOfAxles", {
        get: function () {
            return this._numberOfAxles;
        },
        enumerable: false,
        configurable: true
    });
    return Truck;
}(Vehicle));
