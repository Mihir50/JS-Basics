export default class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

export function printName(User){
    return `My name is ${User.name}`;
}

export function printAge(User){
    return `My age is ${User.age}`;
}


//There can only be one export default in a program.
//There can be many simple exports.
//can write export to every function or class or write it at the bottom of the program. 