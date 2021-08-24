function add(a,b,c,d,e,f,g){
    return a+b+c+d+e+f+g;
}

const args = [1,2,3,4];
const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 

console.log(add(5,...args,6,7));
console.log(lyrics);

