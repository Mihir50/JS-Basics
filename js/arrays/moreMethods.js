const items = [
    {name: 'Bike', price:100},
    {name: 'Tv',   price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25},

]; 

//returns the first item from the array that satisfies the condition

const FoundItem = items.find(item => {
    return item.name === 'Album'
})

console.log(FoundItem);


//returns true or false
//checks if atleast one item satisfies the condition

const inexpensiveItems = items.some(item => {
    return item.price <= 100;
});
console.log(inexpensiveItems);

//returns true or false
//checks if every item satisfies the condition

const inexpensiveItem = items.every(item => {
    return item.price <= 100;
});
console.log(inexpensiveItem);


const num = [1,2,3,4];

const includesThree = num.includes(3);

console.log(includesThree);
