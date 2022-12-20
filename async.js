function samplePromise(){
    return Promise.resolve("Angga");

}



//jika Menggunkan extensi .js 
async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();

