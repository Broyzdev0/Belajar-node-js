const buffer1 = Buffer.from("Angga Nur gunawan", "utf8");


console.info(buffer1.toString());
console.info(buffer1.toString("hex"));
console.info(buffer1.toString("base64"));


const buffer2 = Buffer.from("")
console.info(buffer2.toString("utf8"));