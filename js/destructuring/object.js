const person1 = {
    name: 'Mihir',
    age: 19,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = {
    name: 'Naruto',
    age: 18,
    hair: 'Has hair',
    address: {
        city: 'Konoha',
        state: 'Land of fire'
    }
};

var {name: firstName,hair= 'no hair',address:{city},...rest} = person1;
console.log(firstName,hair,city,rest);

var {name,hair = 'no hair',...rest} = person2;
console.log(name,hair,rest);

//combine objects
//take closer look 
//imp
const p1 ={
    name: 'xyz',
    age: 44,
    gender: 'male',
    continent: 'Asia'

};

const p2 ={
    name:'abc',
    age: 99,
    city: 'Mumbai'
};

const p3 = {...p1,...p2};
console.log(p3);


function printUser({name,age,favouriteFood = 'rice'}){
    console.log(`Name is ${name}. Age is ${age}.Favourite food is ${favouriteFood}`);
}

printUser(person1);

        