//Primitive  => "STACK" , always copy is passed as reference

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt



//Reference(Non-primitive)   => "HEAP" , always original is passed as reference

// Array, Objects, Functions
const alphas = ['a', 'b', 'c']

let myobj = {
    name : 'Abhi',
    age: 22
}
console.log(myobj.name) // accessing an object 

const myfun = function(){
    console.log('hello')
}

console.log(typeof alphas);
console.log(typeof myobj);
console.log(typeof myfun);
