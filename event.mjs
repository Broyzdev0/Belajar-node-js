import { EventEmitter } from "event";


const emiter = new EventEmitter();

emiter.addListener("Hello", (name) => {
    console.info('Hello! ${name}');
})

emiter.addListener("Hello", (name) => {
    console.info('Hello! ${name}');
})

emiter.emit("Hello", "Angga");
