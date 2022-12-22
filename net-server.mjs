import net from "net";

//membuat server
//conect kan dengan client

const server = net.createServer( (client) => {
    console.info("Client connected");

    client.addListener("data", (data) => {
        console.info('Received data' + data.toString());
        client.write('Hello\r\n' + data.toString());
    })
});

server.listen(3000, "localhost");















