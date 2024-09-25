// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sandy",
  "full name": "Sandesh Sapkota",
  [mySym]: "mykey1",
  age: 21,
  location: "Palpa",
  email:"sandy@gmail.com",
  isLoggedIn : false,
  lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

JsUser.email = "sandy@yahoo.com";
// Object.freeze(JsUser);

JsUser.email = "sandy@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
