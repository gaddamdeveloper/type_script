var Names;
(function (Names) {
    Names[Names["vamshi"] = 0] = "vamshi";
    Names[Names["akhil"] = 1] = "akhil";
    Names[Names["naresh"] = 2] = "naresh";
    Names[Names["rajesh"] = 3] = "rajesh";
})(Names || (Names = {}));
for (var name_1 in Names) {
    console.log(Names[name_1]);
}
var Laptops;
(function (Laptops) {
    Laptops[Laptops["ram"] = 0] = "ram";
    Laptops[Laptops["rom"] = 1] = "rom";
    Laptops[Laptops["core"] = 2] = "core";
    Laptops[Laptops["color"] = 3] = "color";
})(Laptops || (Laptops = {}));
for (var laptop in Laptops) {
    console.log(Laptops[laptop]);
}
var Months;
(function (Months) {
    Months[Months["days"] = 0] = "days";
    Months[Months["weeks"] = 1] = "weeks";
    Months[Months["time"] = 2] = "time";
})(Months || (Months = {}));
for (var month in Months) {
    console.log(Months[month]);
}
