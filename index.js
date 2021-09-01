import http from 'http';

function requestHandler(request, response) {
    console.log("Request received, making random number!")
    const randomNumber = Math.random() * 500000;
    response.end(randomNumber.toString());
}

const myServer = http.createServer(requestHandler);

console.log("Server is starting");

myServer.listen(8081);