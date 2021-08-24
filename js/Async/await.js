// function scaryClown(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve('Hello');
//         }, 2000);
//     });
// }

// async function msg(){
//     const msg = await scaryClown();
//     console.log('Message:', msg);
// }

// msg();

// async function hello(){
//     return 'Hello Alligator!';
// }
// hello().then(x => console.log(x));

// const msg = async function(){
//     const msg = await scaryClown();
//     console.log('Message:', msg);
// }

function yayOrNay(){
    return new Promise((resolve,reject) =>{
        const val = Math.round(Math.random() * 1);

        val?resolve('Lucky'):reject('Nope');
    });
}

async function msg(){
    try{
        const msg = await yayOrNay();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}
msg();