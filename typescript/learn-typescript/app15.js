function addOverload(arg1, arg2) {
    return arg1 + arg2;
}
console.log("aaddOverload(1,1)=" + addOverload(1, 1));
console.log("addOverload(''1'',''1'')=" + addOverload("1", "1"));
console.log("addOverload(true,false)=" + addOverload(true, false));
addOverload(1, '2');
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
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
//# sourceMappingURL=app15.js.map