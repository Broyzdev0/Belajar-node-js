import http, { request } from "http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);

    if (request.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("content-type", "application/json");
            response.writable(data);
            response.end();
        })
    }else {
        if (request.url === "/angga") {
            response.writable("Hello Angga")
        }else{
            response.write("Hello HTTP server")
        }
    }

    response.end();
    
});
 //untuk membuat server
server.listen(3000);

