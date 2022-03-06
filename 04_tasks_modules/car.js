"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(id, color, brand) {
        this.id = id;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.displayCarDetails = function () {
        console.log("Id :".concat(this.id, "  Color :").concat(this.color, " Brand :").concat(this.brand));
    };
    return Car;
}());
exports["default"] = Car;
