// Const enums - they are inlined when typescript compilation begin.

const enum Color3 { Red, Green, Blue }
var green: Color3 = Color3.Green;

// ERROR: const enums can only be accessed using string literal
// var greenText: string = Color3[0];

//ERROR: const enums return only number value
// var greenText: string = Color3['Red'];

const enum Color4 { Red = 1, Green = 2, Blue = 4 }
let colorIndex2: number = Color4['Red'];
let colorIndex3: Color4 = Color4['Red'];
// they are the same when compiled

//NOTE: However you might want the compiler to still generate the JavaScript version of the enum definition for stuff like number 
// to string or string to number lookups as we saw. In this case you can use the compiler flag --preserveConstEnums and 
// it will still generate the var Tristate definition so that you can use Tristate["False"] or Tristate[0] manually at runtime if you want. 
// This does not impact inlining in any way.