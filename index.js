import dotenv from 'dotenv'
import http from 'http';

// Reading values from the .env file into process.env
dotenv.config();

// Printing out an example of a value stored in .env
console.log("API_KEY is " + process.env.API_KEY)

function requestHandler(request, response) {
    console.log("Request received, making random number!")
    const randomNumber = Math.round(Math.random() * 99999);
    response.end(process.env.API_KEY + "___" + randomNumber.toString());
}

const myServer = http.createServer(requestHandler);

console.log("Server is starting http://localhost:" + process.env.PORT);

myServer.listen(parseInt(process.env.PORT));