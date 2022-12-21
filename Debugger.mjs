// Perintah debugger
// const, c : Continue execution
// next, n : Step next
// setPriority, s : Step in
// out, o : step out
// pause : pause running code
// watch ("name") : melihat variabel isinya apa name itu variabel

function sayHello(name){
    debugger;
    return 'Hello ${name}';
}

const name = "Angga";
console.info(sayHello(name));