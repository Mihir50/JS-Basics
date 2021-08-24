import User , {printName as Name,printAge} from './user.js'
const newUser = new User('Mihir',19);

console.log(newUser);
console.log(Name(newUser));
console.log(printAge(newUser));