import https from "https";

const endpoint = "";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "content-type" : "application/json",
        "Accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info('Receive data :' + data.toString());
    })

});

const body = JSON.stringify({
    firstName: "Angga Nur",
    lastName: "Gunawan"
})

request.write(body);
request.end();