// Arrays

// Arrays are defined similar to javascript with []
let myArr1 = [1, 2, 3];

// ERROR: arrays are strongly typed
// myArr1[3] = 'pesho';

// Strongly typed declaration.
let myArr2Str: string[] = ['one', 'two', 'three'];

// Alternative syntax
let myArr3: Array<number>;
console.log(myArr3); // undefined;

myArr3 = [];
// ERROR
// myArr3.push('string')
myArr3.push(5);
