const userLeft = true;
const userWatchingAnime = false;

function watchTutorialCallback(callback,errorCallback){
    if (userLeft){
        errorCallback({
            name: 'User left',
            message: ':('
        });
    }else if (userWatchingAnime){
        errorCallback({
            name: 'User watching Anime',
            message: ';('
        });
    }else{
        callback('Thumbs up and study');
    }
}



watchTutorialCallback((message) =>{
    console.log('Success: '+message);
},(error) =>{
    console.log(error.name + ' ' + error.message);
});


function watchTutorialPromise(){
    return new Promise((resolve,reject) =>{
        if (userLeft){
            reject({
                name: 'User left',
                message: ':('
            });
        }else if (userWatchingAnime){
            reject({
                name: 'User watching Anime',
                message: ';('
            });
        }else{
            resolve('Thumbs up and study');
        }
    });
    
}

watchTutorialPromise().then((message) =>{
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
});













