companies1 = [
    {name: 'company1', category: 'retail' ,profit: '$60000'},
    {name: 'company2', category: 'xyz' , profit:'$80000'},
    {name: 'company3', category: 'retail' , profit:'7900000'},
    {name: 'company4', category: 'abc' , profit:'$400000'},
    {name: 'company5', category: 'xyz' , profit:'$500000'},
    {name: 'company6', category: 'retail' , profit:'$100000'},
    {name: 'company7', category: 'abc' , profit:'$200000'},

];

const ages=[];

for(var i = 0; i<10; i++){
    ages.push(Math.floor(Math.random() * 20) + 1);
}


var companyNames = companies1.map(function(company){
    return(company.name);
});

console.log(companyNames)


// const agesSqr = ages.map(function(a){
//     return Math.sqrt(a);
// });

// const agesTwo = ages.map(function(a){
//     return a*2
// });

const combined = ages.map(a => Math.sqrt(a)).map(a => a*2)


console.log(ages)
// console.log(agesSqr)
// console.log(agesTwo)
console.log(combined)