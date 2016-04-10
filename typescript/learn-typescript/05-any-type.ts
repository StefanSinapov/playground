// Data type - ANY
let variable: any = { name: 'Pesho', age: 13 }
variable = { name:'Pesho', age:'new value'}

let myType: any = 'Even a sring can be assigned';

myType = function() { console.log('Even a function can be assigned to any'); };

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;