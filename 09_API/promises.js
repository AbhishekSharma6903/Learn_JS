//1
const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("Promised consumed");
})

//2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('task 2 Resolved');
})

//3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'Abhi', email: "abhi@gmail.com"})
    })
})
promiseThree.then(function(user){
    console.log(user);
})

//4
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'abhi', pass : '123'})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.pass
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Ho gya bhai promise pura"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'javaScript', pass : '123'})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
