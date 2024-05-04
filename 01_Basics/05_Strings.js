const name = "Abhishek"
const repoCount = 30

// console.log(name + repoCount + "Value");

const gameName = new String("Abhi-shek-Sharma")
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(4,gameName.length)
console.log(anotherString);

const newSpaceString = "   SHARMA_JI   "
console.log(newSpaceString);
console.log(newSpaceString.trim());

const url = "https://abhishek.com/abhishek&&&sharma"
console.log(url.replace('&&&','_'));
console.log(url.includes('shek'));
console.log(gameName.split('-'));