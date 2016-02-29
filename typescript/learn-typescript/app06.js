var DemoA = (function () {
    function DemoA() {
    }
    DemoA.prototype.show1 = function () {
        console.log('showA() function in class A');
    };
    DemoA.prototype.show2 = function () {
        console.log('after implicit/explicit casting this function cannot be called!');
    };
    DemoA.prototype.show = function () {
        console.log('DemoA');
    };
    return DemoA;
}());
var DemoB = (function () {
    function DemoB() {
        this.message = 'DemoB';
    }
    DemoB.prototype.showB = function () {
        console.log('showB() function in calss B');
    };
    DemoB.prototype.show = function () {
        console.log("" + this.message);
    };
    return DemoB;
}());
var objA = new DemoA();
objA.show1();
var objB = new DemoB;
objA = objB;
objA = objB;
objA.show2();
var objBshow = new DemoB();
objBshow.showB();
objBshow.show();
var myType2 = { name: "Zia", id: 1 };
myType2 = { id: 2, name: "Tom" };
myType2 = { id: 3, name: "Mike", gender: false };
myType2 = { name: "Mike", gender: false };
myType2 = { pesho: 'asd' };
var myType1 = { name: "Zia", id: 1 };
myType1 = { id: 2, name: "Tom" };
myType1 = { id: 3, name: "Mike", gender: false };
myType1 = { name: "Mike", gender: false };
var a = 2;
//# sourceMappingURL=app06.js.map