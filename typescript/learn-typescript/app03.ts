import {  } from 'a';

let complexType = { name: "myName", id: 1 };

// Here we can assing new object containing the same 
complexType = { id: 2, name: "anotherName" }; 

// ERROR: if new object don't containt both properties
// complexType = { id: 2 };
// complexType = { name: "anotherName" };
// complexType = { address: "address" };

// ERROR: we get error even if we met the conditions but new property is added
// complexType = { id: 3, name: 'differentName', address: 'somestr'}
// NOTE: in Mastering Typescript book this last line of code worked !?!
// excess properties are no longer supported