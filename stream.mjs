import fs, { read } from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Angga ");
writer.write("Nur ");
writer.write("Gunawan");

writer.end();

//untuk membaca data yang ada di dalam file
const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
console.info(data.toString());
});
