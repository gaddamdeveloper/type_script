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
var Book1 = /** @class */ (function () {
    function Book1(price, name, pages) {
        this.price = price;
        this.name = name;
        this.pages = pages;
    }
    Book1.prototype.displayBook = function () {
        console.log("\nid:".concat(this.price, "\nname:").concat(this.name, "\npages:").concat(this.pages));
    };
    return Book1;
}());
var computer2 = /** @class */ (function (_super) {
    __extends(computer2, _super);
    function computer2(price, name, pages, ram, rom, brand) {
        var _this = _super.call(this, price, name, pages) || this;
        _this.ram = ram;
        _this.rom = rom;
        _this.pages = pages;
        return _this;
    }
    computer2.prototype.displayComputer2 = function () {
        console.log("\nram:".concat(this.ram, "\nrom:").concat(this.rom, "\npage:").concat(this.pages, "\nid:").concat(this.price, "\nname:").concat(this.name, "\npages:").concat(this.pages));
    };
    return computer2;
}(Book1));
