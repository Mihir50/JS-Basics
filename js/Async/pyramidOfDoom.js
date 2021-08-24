function download(url,callback){
    setTimeout(() => {
        console.log(`Donwloading ${url}...`);
        callback(url);
    }, 2000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1,function(picture){
    console.log(`Processing ${picture}...`);

    download(url2,function(picture){
        console.log(`Processing ${picture}...`);

        download(url3,function(picture){
            console.log(`Processing ${picture}...`);

        });
    });
});
