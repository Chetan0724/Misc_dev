"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "chetan",
    email: "chetan01@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Chetan", isPaid: false, email: "chetan01@gmail.com" };
createUser(newUser);
// createUser({ name: "Chetan", isPaid: false, email: "chetan01@gmail.com" });
// createUser({ name: "Chetan", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
