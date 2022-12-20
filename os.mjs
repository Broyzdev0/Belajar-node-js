import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.freemem());
console.info(os.homedir());
console.info(os.hostname());

console.table(os.networkInterfaces());
console.table(os.cpus());

