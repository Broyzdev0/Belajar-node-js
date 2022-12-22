import util from "util";

const firtsName = "Angga";
const midlename = "Nur";
const lastname = "Gunawan";

console.info('Hello ' + firtsName + midlename + lastname);
console.info(util.format("Hello %s %s %s", firtsName, midlename, lastname));

const person = {
    firtsName: "Angga",
    midlename: "Nur",
    lastname: "Gunawan"
};

//dengan JSON
console.info('person: ' + JSON.stringify(person));

//dengan util
console.info(util.format("Person : %j", person));