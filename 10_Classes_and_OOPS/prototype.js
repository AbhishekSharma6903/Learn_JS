let myname = 'Abhi    '
console.log(myname.truelength);

let hero = ['thor', 'spiderman']

let heropower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`wSpider Power is ${this.spiderman}`);
    }
}

Object.prototype.power = function(){
    console.log('The heroes are extremely powerful');
}

Array.prototype.demand = function(){
    console.log("we need More Heroes !!");
}

// heropower.demand()
// heropower.power();
// hero.demand();
// hero.power();

//INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__. User
//MODERN SYNTAX
Object.setPrototypeOf(Teacher, TeachingSupport)

let anotherUserName = "ChaiAur Code         "
String.prototype.truelength = function(){
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.truelength()
myname.truelength()