function samplePromise(){
    return Promise.resolve("Angga");

}
//jika Menggunkan extensi .mjs 
const name = await samplePromise();
    console.info(name);
