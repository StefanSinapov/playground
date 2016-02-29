// Lambda (fat arrow) functions
// They preserve the this object that-is-this pattern?
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return () => {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

var add = (a: number, b: number): number => {
    return a + b;
}

var add1 = (x: number, y: number) => (x + y);
var myFunction = f => { this.x = "x"; }
// automatically creating the that-equals-this pattern
/*
When compiled, TypeScript automatically makes sure this points to my class instead of the enclosed function:
var _this = this;
var myFunction = function (f) { _this.x = "x"; };
*/