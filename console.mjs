import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const  log = new Console ({
    stdout: file,
    stder: file,
})

log.info("Hello world!");
log.error("Hello world!");

const person = {
    firtsname : "Angga",
    middlename : "Nur",
    lastname : "Gunawan"
}

log.table(person);