var Bike = /** @class */ (function () {
    function Bike(brandName, color, price) {
        this.brandName = brandName;
        this.color = color;
        this.price = price;
    }
    return Bike;
}());
var bike = new Bike("pulsor", "green", 10000);
var bike2 = new Bike("cbz", "grey", 20000);
console.log(bike);
console.log(bike2);
//employee class
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
// creating object
var employee = new Employee();
employee.id = 1;
employee.name = "vamshi";
employee.mobileNumber = 9491112941;
console.log("Employee:/n".concat(employee.id, "/n").concat(employee.name, "/n").concat(employee.mobileNumber));
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.displayBook = function () {
        this.price = 20;
        this.name = "my friend";
        this.pages = 150;
        console.log("\nid:".concat(this.price, "\nname:").concat(this.name, "\npages:").concat(this.pages));
    };
    return Book;
}());
var book = new Book();
book.displayBook();
