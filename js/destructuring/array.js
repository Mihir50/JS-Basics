// const alpha = ['a','b','c','d','e'];
// const num = [1,2,3,4,5];

// const [first, second] = alpha;

// const [x, , z, ...rest] = num;

// console.log(first);
// console.log(second);
// console.log(x,z,rest);



function arithmetic(n){
    return [n+n,n*n];
}

x = arithmetic(3);

const [sum,multiply,divide = 'no division'] = arithmetic(5);
console.log(x);

console.log(sum);
console.log(multiply);
console.log(divide);