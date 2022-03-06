"use strict";
exports.__esModule = true;
var Computer1 = /** @class */ (function () {
    function Computer1(brand, price, ram) {
        this.brand = brand;
        this.price = price;
        this.ram = ram;
    }
    Computer1.prototype.displayComputer = function () {
        console.log("brand:".concat(this.brand, "price:").concat(this.price));
    };
    return Computer1;
}());
exports["default"] = Computer1;
