import net from "net";

//jalan dulu server sebelum client
const client = net.createConnection({
    port: 3000,
    host: "localhost"
});

client.addListener("data", (data) => {
    console.info('Received data from server:' + data.toString());
});

setInterval( () => {
    client.write("Angga\r\n");
}, 2000);