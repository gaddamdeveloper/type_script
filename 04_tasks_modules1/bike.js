"use strict";
exports.__esModule = true;
var Bike3 = /** @class */ (function () {
    function Bike3(brandName, color, price) {
        this.brandName = brandName;
        this.color = color;
        this.price = price;
    }
    Bike3.prototype.displayBike = function () {
        console.log("brandName:".concat(this.brandName, "color:").concat(this.color, "price:").concat(this.price));
    };
    return Bike3;
}());
exports["default"] = Bike3;
