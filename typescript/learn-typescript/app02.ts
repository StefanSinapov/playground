// use const where veraibles values do not change in the code
const x = 5;
// (will get error if I try to change it)
// x = 5 + 5;

// It is prefirable to use let instead var everywhere,
// because let have blocked scope
if (true) {
    let z = 4;
    // here we can use z;
    console.log(z);
} else {
    let z = 'string';
    // here we can use z as string;
    console.log(`This is new feature of ${z}s in typescript`)
}

// ERROR: But here we CAN'T use z
// console.log(z);

//Here is something interesting in the compiled file.
var y: boolean;

if (true) {
    let y = 5;
    console.log(y);
} else {
    let y = 'string';
}

console.log(y);