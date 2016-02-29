// Functions

 
// There are mainly four ways how you can define a function in TypeScript and they are : 
//     Named Functions, Anonymous Functions, Lambda Functions and Class Functions.
 
 
// ###  Named Functions ###
 
/**
 * Add numbers
 * @param  {number} a
 * @param  {number} b
 * @returns {number} The sum of the two parameters
 */
function addNumbers(a: number, b: number): number {
    return a + b;
};

var result = addNumbers(1, 2);

// ERROR: this is typed function
// var result2 = addNumbers('1', '2');
 
var result2: string = addNumbers(1, 2).toString();

var myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

var myAdd2: (baseValue: number, increment: number) => number = (x, y) => x + y;

// Required Parameters (by default)
/**
 * Builds the full name of person providing his first and last name
 * @param  {string} firstName
 * @param  {string} lastName
 * @returns {string} firstName + lastName
 */
function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}

// var result1 = fullName("Bob");  // Error, too few parameters
// var result2 = fullName("Bob", "Adams", "Sr.");  // Error, too many parameters
var result3 = fullName("Bob", "Adams");  //ah, just right


// ## Optinal parameters
/**
 * @param  {string} firstName
 * @param  {string} lastName 
 * @param  {string} middleName?
 * @returns 
 */
function fullName2(firstName: string, lastName: string, middleName?: string): string {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`
    } else {
        return `${firstName} ${lastName}`
    }
}
console.log(fullName2("Gosho", 'Goshov'));
console.log(fullName2("Gosho", 'Goshov', 'Stamatov'));

// ## Default value parameters
function fullName3(firstName: string, lastName: string, middleName = 'Peshov'): string {
    return `${firstName} ${middleName} ${lastName}`;
}


console.log(fullName3("Gosho", 'Goshov'));
console.log(fullName3("Gosho", 'Goshov'));

// ### Rest Parameters
var buildName = function(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

function sum(first: number, second: number, ...restOfNumbers: number[]): number {
    return first + second + restOfNumbers.reduce((prev, current) => prev + current, 0)
}
console.log("Sum(1, 2) = " + sum(1, 2));
console.log("Sum(1, 2, 3, 4, 5) = " + sum(1, 2, 3, 4, 5));


// ### function parameters
function myLog(num: string, log: (item: string) => void): void {
    log(num);
}

myLog('hello', buildName)

function biuldNameProxy(firstName: string, func: typeof buildName): void {
    func(firstName);
}