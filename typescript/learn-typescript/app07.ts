// Enums
enum HttpRequest { Post, Put, Get, Delete }
var postStr: string = HttpRequest[HttpRequest.Post]; // Here we get the string of the enum 
let areEqual: boolean = HttpRequest[0] === HttpRequest[HttpRequest.Post];
var postStr2: string = HttpRequest.Post.toString();

console.log(`HttpRequest[HttpRequest.Post] = ${postStr}`);

console.log(`HttpRequest[0] === HttpRequest[HttpRequest.Post]; => ${areEqual}`);

console.log(`HttpRequest.Post.toString() = ${postStr2}`);


enum Color { Red, Green, Blue };//starts with 0
var c: Color = Color.Green;

enum Color1 { Red = 1, Green, Blue };
var colorName: string = Color1[2];
console.log(`Color1[2] => ${colorName}`);

enum Color2 { Red = 1, Green = 2, Blue = 4 };//can assign values to all
var colorIndex = Color2['Blue'];
console.log(`Color2['Blue'] => ${colorIndex}`);


// Best way to get the string
let someColor: Color = Color.Red;
someColor // -> 0
Color[someColor] // -> Red


// Flags

enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,
    EatsFish = 1 << 2,
    Endangered = 1 << 3,

    EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered,
}

function printAnimalAbilities(animal) {
    var animalFlags = animal.flags;
    if (animalFlags & AnimalFlags.HasClaws) {
        console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
        console.log('animal can fly');
    }
    if (animalFlags == AnimalFlags.None) {
        console.log('nothing');
    }
}

var animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // animal has claws, animal can fly

// Here:
// we used |= to add flags
// a combination of &= and ~ to clear a flag
// | to combine flags
