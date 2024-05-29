function SetUsername(username){
    this.username = username
    console.log("Called bhai !!");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    //call sends it personal 'this', so that it can contain/store the value and get back with it.
    this.email = email
    this.password = password
}

const abhi = new createUser("Abhishek Sharma", "abhiabhishek6903@gmail.com", "1234657980")
console.log(abhi);