// **Annotations**
// let myVar: type = value

// 1. Strings

let myName: string = "chetan developer";
// let myName: string = 12 Error
// const myName: string = "chetan developer";
myName = "another developer";
console.log(myName);

// ERROR
// myName = 12;

// 2. Numbers

let favNumber: number = 7;
// let favNumber: number = true; Error
favNumber += 2;

console.log(favNumber);

// ERROR
// favNumber = "eleven";

// 3. Boolean

let tsHard: boolean = false;
// tsHard = true
console.log(tsHard);

// ERROR
// tsHard = 100;
// tsHard = "no";

// **Type Inference**

// Inferring

// Here we're inferring the types!
let tech = "TypeScript";
// tech = 12; Error
let favNumbertwo = 8;
let tsHardTwo = true;
console.log(typeof tech);
console.log(tech, favNumbertwo, tsHardTwo);

// ERROR
// tech = false
// favNumbertwo = "Hello"
// tsHardTwo = 20

// **Any Type**

let color: any = "crimson";
color = 20;
color = true;
// color(); Error at runtime
color.toUpperCase();
console.log(color);

let colorTwo: string = "crimsonTwo";
// colorTwo = 20; Error
// colorTwo = true; Error
// colorTwo(); Error


// **Function Parameters Annotations**

// Regular Func
