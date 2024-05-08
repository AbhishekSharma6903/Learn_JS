function Name(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
// Name()


function addTwoNums(n1, n2){
    // let ans = n1+ n2
    // return ans
    return n1 + n2
}

const result = addTwoNums(1,9)
// console.log(result);


function loginUserMessage(username = 'Sharma'){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in`
}

// console.log(loginUserMessage("Abhishek"));



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));