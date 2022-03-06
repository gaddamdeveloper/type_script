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
var Tv = /** @class */ (function () {
    function Tv(price, model, inches) {
        this.price = price;
        this.model = model;
        this.inches = inches;
    }
    Tv.prototype.displayTv = function () {
        console.log("".concat(this.price, ",").concat(this.model, ",").concat(this.inches));
    };
    return Tv;
}());
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(height, width, weight, price, model, inches) {
        return _super.call(this, price, model, inches) || this;
    }
    return Door;
}(Tv));
