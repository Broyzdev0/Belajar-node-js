import fs from "fs/promise";

const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());
