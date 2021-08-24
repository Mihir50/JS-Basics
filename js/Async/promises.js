let p = new Promise((resolve, reject) =>{
    let a = 1 + 6;
    if(a ==2){
        resolve('success');
    }
    else{
        reject(new Error('Failed'));
    }
});

p.then((message) =>{
    console.log('This is in resolve! ' + message);
}).catch((message) =>{
    console.log('This is in catch ' + message);
});