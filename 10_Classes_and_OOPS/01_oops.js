const user = {
    username: 'abhi',
    age : 19,
    signedIn: true,

    getUserDetails : function(){
        // console.log('hi got details');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, age, signedIn){
    this.username = username;
    this.age = age;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User('abhi',19,true);
const userTwo = new User('abhi',21,false);
console.log(userOne.constructor);
// console.log(userTwo);
