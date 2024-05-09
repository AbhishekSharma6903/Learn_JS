const user = {
    username : "Abhishek",
    age : 19,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
} 

// user.welcomeMessage()
// user.username = "sharma"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "Jash"
    console.log(this.username);
}
// chai()

// const addTwo = (n1 , n2) =>{
//     return n1 + n2;
// }

// const addTwo = (n1 , n2) => n1 + n2

// const addTwo = (n1 , n2) => (n1 + n2)

const addTwo = (n1 , n2) => ({username: "Flash"})

console.log(addTwo(2,7));


// const myArray = [2,3,4,5]
// myArray.forEach()