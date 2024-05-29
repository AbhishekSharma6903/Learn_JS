class User{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`Username: ${this.username}`);
    }

     createID(){
        return `123`
    }
}


const abhi = new User("Abhishek")
console.log(abhi.createID());

class Teacher extends User{
        constructor(username, email){
            super(username)
            this.email = email
        }
}

const iphone = new Teacher("iphone","apple@gmail.com")
console.log(iphone);
