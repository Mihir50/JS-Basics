const recordVideoOne = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Video1 recorded');
    }, 2000);
});

const recordVideoTwo = new Promise((resolve,reject) =>{
    resolve('Video2 recorded');
});

const recordVideoThree = new Promise((resolve,reject) =>{
    resolve('Video3 recorded');
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
});

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(message)
});