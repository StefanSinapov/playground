function addNumbers(a, b) {
    return a + b;
}
;
var result = addNumbers(1, 2);
var result2 = addNumbers(1, 2).toString();
var myAdd = function (x, y) { return x + y; };
var myAdd2 = function (x, y) { return x + y; };
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result3 = fullName("Bob", "Adams");
function fullName2(firstName, lastName, middleName) {
    if (middleName) {
        return firstName + " " + middleName + " " + lastName;
    }
    else {
        return firstName + " " + lastName;
    }
}
console.log(fullName2("Gosho", 'Goshov'));
console.log(fullName2("Gosho", 'Goshov', 'Stamatov'));
function fullName3(firstName, lastName, middleName) {
    if (middleName === void 0) { middleName = 'Peshov'; }
    return firstName + " " + middleName + " " + lastName;
}
console.log(fullName3("Gosho", 'Goshov'));
console.log(fullName3("Gosho", 'Goshov'));
var buildName = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
function sum(first, second) {
    var restOfNumbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNumbers[_i - 2] = arguments[_i];
    }
    return first + second + restOfNumbers.reduce(function (prev, current) { return prev + current; }, 0);
}
console.log("Sum(1, 2) = " + sum(1, 2));
console.log("Sum(1, 2, 3, 4, 5) = " + sum(1, 2, 3, 4, 5));
function myLog(num, log) {
    log(num);
}
myLog('hello', buildName);
function biuldNameProxy(firstName, func) {
    func(firstName);
}
//# sourceMappingURL=app09.js.map