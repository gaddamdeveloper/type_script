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
var Driver1 = /** @class */ (function () {
    function Driver1(age, name, mobileNumber) {
        this.age = age;
        this.name = name;
        this.mobileNumber = mobileNumber;
    }
    Driver1.prototype.displayDriverDetails = function () {
        console.log("\nAge:".concat(this.age, "\nname:").concat(this.name, "\n").concat(this.mobileNumber));
    };
    return Driver1;
}());
var Zomato1 = /** @class */ (function (_super) {
    __extends(Zomato1, _super);
    function Zomato1(age, name, mobileNumber, select, restaurant, price) {
        var _this = _super.call(this, age, name, mobileNumber) || this;
        _this.select = select;
        _this.restarant = restaurant;
        _this.price = price;
        return _this;
    }
    Zomato1.prototype.displayZomatoDetails = function () {
        console.log("\nselect:".concat(this.select, "\nrestarant:").concat(this.restarant, "\nprice:").concat(this.price, "\nAge:").concat(this.age, "\nname:").concat(this.name, "\n mnuber:").concat(this.mobileNumber));
    };
    return Zomato1;
}(Driver1));
var zomato = new Zomato1(1, "vamshi", 9491112941, "nonveg", "mefhil", 500);
zomato.displayZomatoDetails();
