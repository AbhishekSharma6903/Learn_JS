const mysum = Symbol("key1")

const JsUser = {
    name : "Abhishek",
    "Full Roll" : "ch.en.u4cys21001",
    age: 20,
    email : "abhi@gmail.com",
    isLoggedIn: false,
    [mysum] : "mykey1"
}
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Roll"]);
// console.log(JsUser[mysum]);

JsUser.email = "sharma@gmail.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser);

JsUser.email = "SHARMA@gmail.com"
// console.log(JsUser["email"]);

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello lerner");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());