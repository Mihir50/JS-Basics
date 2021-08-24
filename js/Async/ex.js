function download(url,callback){
    setTimeout(() =>{
        console.log(`Donwloading ${url}...`);

        callback(url);
    },2000);
}

// function process(picture){
//     console.log(`Processing ${picture}`);
// }

// let url = 'https://google.com/picture.jpg'
// download(url,process);

let url = 'https://google.com/picture.jpg'

download(url,(picture) =>{
    console.log(`Processing ${url}`);
});

