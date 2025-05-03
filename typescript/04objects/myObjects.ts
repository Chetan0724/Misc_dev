const User = {
  name: "chetan",
  email: "chetan01@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Chetan", isPaid: false, email: "chetan01@gmail.com" };
createUser(newUser);

// createUser({ name: "Chetan", isPaid: false, email: "chetan01@gmail.com" });

// createUser({ name: "Chetan", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

export {};