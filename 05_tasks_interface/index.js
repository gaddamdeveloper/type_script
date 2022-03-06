//  interface airthematic{
//      add(num1:number,num2:number);
//      mul(num1:number,num2:number);
var subtractionAnddivision = /** @class */ (function () {
    function subtractionAnddivision() {
    }
    subtractionAnddivision.prototype.sub = function (num1, num2) {
        this.result = num1 - num2;
        console.log("addition".concat(this.result));
    };
    subtractionAnddivision.prototype.div = function (num1, num2) {
        this.result = num1 / num2;
        console.log("division".concat(this.result));
    };
    return subtractionAnddivision;
}());
var subAnddiv = new subtractionAnddivision();
{
    subAnddiv.sub(50, 40);
    subAnddiv.div(80, 20);
}
