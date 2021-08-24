function donwload(url,success,failure){
    setTimeout(() => {
        console.log(`Downloading ${url}..`);
        let error = url.length === 0 || !url;
        error?failure(url):success(url);
    }, 2000);
}

let url = 'https://google.com/picture.jpg'

donwload(url,
function(picture){
    console.log(`Processing ${picture}`);
},
function(picture){
    console.log(`Handling errors....`);
}
);