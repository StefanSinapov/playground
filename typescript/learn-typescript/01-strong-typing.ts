// strongly typed syntax 
let country: string = 'Bulgaria';

country = "USA";

let num: number = 9;
let bool: boolean = true;

// type interface
let e = 'some string';

// I get error if I try to assign other then string
// e = { gosho: 5 }; 
e = 'but this is working just fine!';

let otherBolean = false;
// and again if I try to assign something different of bolean error occurs
otherBolean = 'false' === 'false'; 
