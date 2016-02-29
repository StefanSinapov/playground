var HttpRequest;
(function (HttpRequest) {
    HttpRequest[HttpRequest["Post"] = 0] = "Post";
    HttpRequest[HttpRequest["Put"] = 1] = "Put";
    HttpRequest[HttpRequest["Get"] = 2] = "Get";
    HttpRequest[HttpRequest["Delete"] = 3] = "Delete";
})(HttpRequest || (HttpRequest = {}));
var postStr = HttpRequest[HttpRequest.Post];
var areEqual = HttpRequest[0] === HttpRequest[HttpRequest.Post];
var postStr2 = HttpRequest.Post.toString();
console.log("HttpRequest[HttpRequest.Post] = " + postStr);
console.log("HttpRequest[0] === HttpRequest[HttpRequest.Post]; => " + areEqual);
console.log("HttpRequest.Post.toString() = " + postStr2);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log("Color1[2] => " + colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var colorIndex = Color2['Blue'];
console.log("Color2['Blue'] => " + colorIndex);
var someColor = Color.Red;
someColor;
Color[someColor];
var AnimalFlags;
(function (AnimalFlags) {
    AnimalFlags[AnimalFlags["None"] = 0] = "None";
    AnimalFlags[AnimalFlags["HasClaws"] = 1] = "HasClaws";
    AnimalFlags[AnimalFlags["CanFly"] = 2] = "CanFly";
    AnimalFlags[AnimalFlags["EatsFish"] = 4] = "EatsFish";
    AnimalFlags[AnimalFlags["Endangered"] = 8] = "Endangered";
    AnimalFlags[AnimalFlags["EndangeredFlyingClawedFishEating"] = 15] = "EndangeredFlyingClawedFishEating";
})(AnimalFlags || (AnimalFlags = {}));
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
printAnimalAbilities(animal);
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal);
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal);
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal);
//# sourceMappingURL=app07.js.map