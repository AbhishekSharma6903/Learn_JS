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
console.log(result);


function loginUserMessage(username = 'Sharma'){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in`
}

console.log(loginUserMessage("Abhishek"));