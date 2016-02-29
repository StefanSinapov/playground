var pesho;
pesho = 'Pesho';
pesho = 5;
pesho = false;
pesho = ['yes', 'yes', 'no'];
function addWithUnion(arg1, arg2) {
    if (typeof arg1 === 'string') {
        arg1;
        return arg1 + ' is a string';
    }
    else if (typeof arg1 === 'number') {
        return arg1.toPrecision(2);
    }
    else {
        return arg1 && true;
    }
}
function f(x) {
    if (typeof x === 'number') {
        return x;
    }
    else {
        return x.reduce(function (prev, curr) { return (prev + curr); }, 0);
    }
}
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.woof = function () { console.log("Woof"); };
    return Dog;
}());
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () { console.log("Meow"); };
    return Cat;
}());
var pet = new Dog();
if (pet instanceof Dog) {
    pet.woof();
}
else if (pet instanceof Cat) {
    pet.meow();
}
else {
}
var some = "Tom";
if (typeof some === 'string') {
    console.log(some.lengthX);
}
some.unknown();
//# sourceMappingURL=app16.js.map