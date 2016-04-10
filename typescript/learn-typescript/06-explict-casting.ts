// Expicit casting
// In TypeScript we can explicitly specify the types of the objects.
// An object of one type can be cast to another type by using < > syntax.
// TypeScript allows us to explicitly cast from any type object to a data type “any” and vice versa.
// TypeScript compiler performs casting at compile-time and it does not generate casting in JavaScript code at run-time.

interface IShowable {
    show(): void;
}

class DemoA implements IShowable { // A class declaration.
    // Implicitly null parametrized void type functions are declared.
    show1() {
        console.log('showA() function in class A');
    }
    show2() {
        console.log('after implicit/explicit casting this function cannot be called!');
    }
    show(){
        console.log('DemoA');
    }
}

class DemoB implements IShowable  { // Another class declaration.
    
    message: string;
    
    showB() {
        console.log('showB() function in calss B');
    }
    show(){
        console.log(`${this.message}`);
    }
    
    /**
     *
     */
    constructor() {
        this.message = 'DemoB'
    }
}
 
// An object creation of DemoA class type.
var objA: DemoA = new DemoA();
 
/* A function of class DemoA is being called through an object reference. NOTE: this function is being called before implicitly/explicitly cast occurs. */
objA.show1();
 
/* An object creation of DemoB class type. NOTE: this object is being created as “any” type. */
var objB: any = new DemoB; // This should be ERROR
 
/* An implicit cast from 'any' DemoB object type to 'DemoA' object type. */
objA = objB;

// OR

/* An explicit cast from 'any' DemoB object type to 'DemoA' object type. NOTE: here a < > syntax is being used which indicates an explicit casting. */
objA = <DemoA>objB;

/* Another function of class DemoA is being trying to called through an object reference. NOTE: this function is being called after implicitly/explicitly cast has occurred. This function will not be called/invoked. */
objA.show2();


let objBshow = new DemoB();
objBshow.showB();

(objBshow as IShowable).show();


// 
let myType2 = <any> { name: "Zia", id: 1 };
myType2 = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
myType2 = { id: 3,  name: "Mike", gender: false };//can add a property
myType2 = { name: "Mike", gender: false };//can even reduce the properties because of initial any explict casting
myType2 = {pesho: 'asd'} // can even change it to entire different object;

let myType1 = { name: "Zia", id: 1 } as any;//this is an alternative syntax for casting
myType1 = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
myType1 = { id: 3,  name: "Mike", gender: false };//can add a property
myType1 = { name: "Mike", gender: false };//can even reduce the properties because of initial any explict casting

let a = 2;
// let b = a as string; //ERROR

