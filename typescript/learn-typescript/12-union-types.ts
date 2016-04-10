// Union types
var pesho: string | number | boolean | string[];

pesho = 'Pesho';
pesho = 5;
pesho = false;
pesho = ['yes', 'yes', 'no'];
// ERROR:
// pesho = [1, 2 ,3];

// Union types and type guards
function addWithUnion(arg1: string | number | boolean, arg2: string | number | boolean): string | number | boolean {
    if (typeof arg1 === 'string') {
        // This is known as a type guard and means that the 
        // type of x will be treated as a string within the if statement block
        // arg1 is treated as a string here
        arg1
        return arg1 + ' is a string';
    } else if (typeof arg1 === 'number') {
        // arg1 is treated as number here;
        return arg1.toPrecision(2);
    } else {
        // arg1 is treated as boolean here 
        // because all other types are already catched
        return arg1 && true;
    }
    // Same as:
    // else if (typeof arg1 === 'boolean'){
    //     arg1
    // }
}

function f(x: number | number[]) {
    if (typeof x === 'number') {
        // the type of x will be treated as a number within the 
        // if statement block
        return x;
    } else {
        return x.reduce((prev, curr) => (prev + curr), 0);
    }
}

// Type guards with classes (instanceof)

/**
 * Dog
 */
class Dog {
    woof() { console.log("Woof"); }
}

/**
 * Cat
 */
class Cat {
    meow() { console.log("Meow"); }
}

var pet: Dog | Cat = new Dog();
// this is the type guard
if (pet instanceof Dog) {
    pet.woof(); // ok
} else if (pet instanceof Cat) {
    // here pet is treated as Cat
    pet.meow()
} else {
    //ERROR
    // pet.woof();
}

/*
    Note on Type Guards:
    A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime. 
    TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
    This is called a type guard.
*/

var some: any = "Tom"; //Line A
if (typeof some === 'string') { //Line B
    // ERROR, 'lengthX' does not exist on 'string' but 'lenght' does
    // console.log(some.lengthX);
}
// some is still any here
some.unknown();// OK
