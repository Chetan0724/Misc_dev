function addTwo(num: number): number {
  // num.toUpperCase() -> Error

  return num + 2;
  // return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, emailL: string, isPaid: boolean = false) => {};

// addTwo("5") -> Error
let myValue = addTwo(5);
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

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

// heros.map((hero: string) => {
/*

heros.map(hero => {
    return `Hero is ${hero}`
    return 2 -> Valid
})

*/

heros.map((hero): string => {
  return `Hero is ${hero}`;
  // return 2 --> Error
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
    // return 5 --> Error
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {};