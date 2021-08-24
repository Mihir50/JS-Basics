
//rest parameter
function mutiply(...args){
    console.log(args.reduce(function(product,currvalue){
        return product*currvalue;
    }));
}
mutiply(1,2,3,4);


//spread function
function mult(a,b,c,d){
    console.log(a*b*c*d);
}
const arr = [1,2,3,4];
mult(...arr)

