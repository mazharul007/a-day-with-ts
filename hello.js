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
// syntax
function hello(a) {
    console.log(a);
}
var a = "hello typescript";
hello(a);
// basics
var isMotivated = true;
console.log(isMotivated);
var myAge = 26;
console.log(myAge);
var myName = "Mazharul Hoque";
console.log(myName);
var employeeInfos = ['Naumy', 'Inan', 'Moshiur'];
//enum
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 0] = "apple";
    fruits[fruits["banana"] = 1] = "banana";
    fruits[fruits["mango"] = 2] = "mango";
    fruits[fruits["orange"] = 3] = "orange";
})(fruits || (fruits = {}));
var fruitName = fruits[3];
console.log(fruitName);
function product(x, y) {
    return x * y;
}
product(20, 2);
// anonymous 
var func = function (x, y) {
    if (y === void 0) { y = 5; }
    return x * y;
};
console.log(func(2, 2));
// arrow func 
var arrowFunc = function (a) { return console.log(a); };
console.log(arrowFunc('Mazharul Hoque Tommy'));
// classes
var MyClass = /** @class */ (function () {
    function MyClass(k) {
        this.j = k;
    }
    MyClass.prototype.value = function () {
        return ("The number is " + this.j);
    };
    return MyClass;
}());
var myClassObj = new MyClass(6);
console.log(myClassObj.value());
//inheritence 
var MyChildClass = /** @class */ (function (_super) {
    __extends(MyChildClass, _super);
    function MyChildClass(m, k) {
        var _this = _super.call(this, k) || this;
        _this.l = m;
        return _this;
    }
    MyChildClass.prototype.value2 = function () {
        return "value from Myclass is " + this.j + " value from child class is " + this.l;
    };
    return MyChildClass;
}(MyClass));
var myChildClassObject = new MyChildClass(100, 200);
console.log(myChildClassObject.value2());
//interface 
