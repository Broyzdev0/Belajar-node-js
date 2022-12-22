import zlib from "zlib";
import fs from "fs";


//untuk mengompress file
const source = fs.readFileSync("zlib-compres.mjs"); //masukan file yang ingin di compress
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compres.mjs.txt", result);