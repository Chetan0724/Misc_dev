"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() -> Error
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, emailL, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// addTwo("5") -> Error
var myValue = addTwo(5);
// addTwo(5)
getUpper("chetan");
signUpUser("chetan", "ydvchetan01@gmail.com", false);
loginUser("chetan", "ydvchetan01@gmail.com");
/*

function getValue(myVal: number): boolean {
    if(myVal > 5) {
        return true
    }
    return "200 OK"
}

*/
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
// heros.map((hero: string) => {
/*

heros.map(hero => {
    return `Hero is ${hero}`
    return 2 -> Valid
})

*/
heros.map(function (hero) {
    return "Hero is ".concat(hero);
    // return 2 --> Error
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 5 --> Error
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
