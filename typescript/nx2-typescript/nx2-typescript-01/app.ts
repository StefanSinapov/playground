'use strict';

// import Logger = require("domLogger");
import {DomLogger} from 'domLogger';

interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person: IPerson) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

var logger = new DomLogger('content');
logger.log(greeter({ firstName: 'Pesho', lastName: 'Peshov' }));
logger.log('Hello from typescript');


interface IDictionary {
    [index: string]: string;
}

interface IDictionaryPlusLenght {
    data: IDictionary;
    lenght: number;
}

class MyDictionary implements IDictionaryPlusLenght {
    private getLength(dict: IDictionary): number {
        let count = 0;
        for (let key in dict) {
            if (dict.hasOwnProperty(key)) {
                count++;
            }
        }

        return count;
    }

    data: IDictionary = { 'a': 'aaa', 'b': 'bbb' };
    lenght = this.getLength(this.data);
}

class Animal {
    name: string;

    constructor(theName: string) { this.name = theName; }

    move(meters: number = 0) {
        logger.log(this.name + ' moved ' + meters + 'm.');
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }

    move(meters: number = 5) {
        logger.log('Slithering...');
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }

    move(meters: number = 45) {
        logger.log('Galloping...');
        super.move(meters);
    }
}

var sam = new Snake('Sammy the Python');
var tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);


class Greeter {
    static standardGreeting = 'Hello, there';
    greeting: string;

    greet() {
        if (this.greeting) {
            return `Hello, ${this.greeting}`;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

var greeter1: Greeter;
greeter1 = new Greeter();
logger.log(greeter1.greet());

var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey there!';
var greeter2 = new greeterMaker();
logger.log(greeter2.greet());

function logging<T extends (a: string) => void>(func: T) {
    func('Hello from logger');
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal2 {
    numLegs: number;
}

class Bee extends Animal2 {
    keeper: BeeKeeper;
}

class Lion extends Animal2 {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K>(a: {
    new (): A;
    prototype: { keeper: K }
}): K {

    return a.prototype.keeper;
}

//findKeeper(Animal2).nametag;  // typechecks!