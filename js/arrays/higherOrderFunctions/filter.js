companies1 = [
    {name: 'company1', category: 'retail' ,profit: '$60000'},
    {name: 'company2', category: 'xyz' , profit:'$80000'},
    {name: 'company3', category: 'retail' , profit:'7900000'},
    {name: 'company4', category: 'abc' , profit:'$400000'},
    {name: 'company5', category: 'xyz' , profit:'$500000'},
    {name: 'company6', category: 'retail' , profit:'$100000'},
    {name: 'company7', category: 'abc' , profit:'$200000'},

];


// const retailCompany = companies1.filter(function(company){
//     if(company.category === 'retail'){
//         return true;
//     }
// });

const Retail = companies1.filter( r => r.category === 'retail' )

// console.log(retailCompany);
console.log(Retail);