System.register(['domLogger'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var domLogger_1;
    var logger, MyDictionary, Animal, Snake, Horse, sam, tom, Greeter, greeter1, greeterMaker, greeter2, BeeKeeper, ZooKeeper, Animal2, Bee, Lion;
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    function logging(func) {
        func('Hello from logger');
    }
    function findKeeper(a) {
        return a.prototype.keeper;
    }
    return {
        setters:[
            function (domLogger_1_1) {
                domLogger_1 = domLogger_1_1;
            }],
        execute: function() {
            logger = new domLogger_1.DomLogger('content');
            logger.log(greeter({ firstName: 'Pesho', lastName: 'Peshov' }));
            logger.log('Hello from typescript');
            MyDictionary = (function () {
                function MyDictionary() {
                    this.data = { 'a': 'aaa', 'b': 'bbb' };
                    this.lenght = this.getLength(this.data);
                }
                MyDictionary.prototype.getLength = function (dict) {
                    var count = 0;
                    for (var key in dict) {
                        if (dict.hasOwnProperty(key)) {
                            count++;
                        }
                    }
                    return count;
                };
                return MyDictionary;
            }());
            Animal = (function () {
                function Animal(theName) {
                    this.name = theName;
                }
                Animal.prototype.move = function (meters) {
                    if (meters === void 0) { meters = 0; }
                    logger.log(this.name + ' moved ' + meters + 'm.');
                };
                return Animal;
            }());
            Snake = (function (_super) {
                __extends(Snake, _super);
                function Snake(name) {
                    _super.call(this, name);
                }
                Snake.prototype.move = function (meters) {
                    if (meters === void 0) { meters = 5; }
                    logger.log('Slithering...');
                    _super.prototype.move.call(this, meters);
                };
                return Snake;
            }(Animal));
            Horse = (function (_super) {
                __extends(Horse, _super);
                function Horse(name) {
                    _super.call(this, name);
                }
                Horse.prototype.move = function (meters) {
                    if (meters === void 0) { meters = 45; }
                    logger.log('Galloping...');
                    _super.prototype.move.call(this, meters);
                };
                return Horse;
            }(Animal));
            sam = new Snake('Sammy the Python');
            tom = new Horse('Tommy the Palomino');
            sam.move();
            tom.move(34);
            Greeter = (function () {
                function Greeter() {
                }
                Greeter.prototype.greet = function () {
                    if (this.greeting) {
                        return "Hello, " + this.greeting;
                    }
                    else {
                        return Greeter.standardGreeting;
                    }
                };
                Greeter.standardGreeting = 'Hello, there';
                return Greeter;
            }());
            greeter1 = new Greeter();
            logger.log(greeter1.greet());
            greeterMaker = Greeter;
            greeterMaker.standardGreeting = 'Hey there!';
            greeter2 = new greeterMaker();
            logger.log(greeter2.greet());
            BeeKeeper = (function () {
                function BeeKeeper() {
                }
                return BeeKeeper;
            }());
            ZooKeeper = (function () {
                function ZooKeeper() {
                }
                return ZooKeeper;
            }());
            Animal2 = (function () {
                function Animal2() {
                }
                return Animal2;
            }());
            Bee = (function (_super) {
                __extends(Bee, _super);
                function Bee() {
                    _super.apply(this, arguments);
                }
                return Bee;
            }(Animal2));
            Lion = (function (_super) {
                __extends(Lion, _super);
                function Lion() {
                    _super.apply(this, arguments);
                }
                return Lion;
            }(Animal2));
        }
    }
});
//findKeeper(Animal2).nametag;  // typechecks! 
//# sourceMappingURL=app.js.map