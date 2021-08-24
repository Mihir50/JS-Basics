const ages = [55,23,1,87,12,43,56]

companies1 = [
    {name: 'company1', category: 'retail' ,profit: '$600'},
    {name: 'company2', category: 'xyz' , profit:'$800'},
    {name: 'company3', category: 'retail' , profit:'$790'},
    {name: 'company4', category: 'abc' , profit:'$400'},
    {name: 'company5', category: 'xyz' , profit:'$500'},
    {name: 'company6', category: 'retail' , profit:'$100'},
    {name: 'company7', category: 'abc' , profit:'$200'},

];


sortedAges = ages.sort((a,b) => a-b);//for ascending a-b //for descending b-a

sortedProfit = companies1.sort((a,b) => a.profit<b.profit?1:-1);
console.log(sortedProfit);

const ageSum1 = ages.reduce(function(total,age){
    return total+age;
},0);
console.log(ageSum1);
const ageSum = ages.reduce((total,age) => total + age,0);
console.log(ageSum);

console.log(sortedAges);
