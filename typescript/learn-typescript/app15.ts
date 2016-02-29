// Overloads

function addOverload(arg1: string, arg2: string): string;
function addOverload(arg1: number, arg2: number): number;
function addOverload(arg1: number, arg2: string): number;
function addOverload(arg1: boolean, arg2: boolean): boolean;
function addOverload(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

console.log("aaddOverload(1,1)=" + addOverload(1, 1));

console.log("addOverload(''1'',''1'')=" + addOverload("1", "1"));

console.log("addOverload(true,false)=" + addOverload(true, false));
 
 // ERROR: no string, boolean overload;
//  addOverload("1", true)

// Mixed
addOverload(1, '2');


/// Example usage:
var suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);