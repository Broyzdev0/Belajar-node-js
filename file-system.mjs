import fs from "fs/promise";

const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello Node js!");
