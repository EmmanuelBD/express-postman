// const http = require('http');

// const handleAllRequests =  () => {
//     console.log('Hi, i just received a request');
// }

// const server = http.createServer();

// server.listen(3000, '127.0.0.1', ()=> console.log('Server is ready to accept request')); 



// const http = require("http")

// const handleAllRequests = (requestObject, response) => {
//     response.write("you are welcome to our backend app");
// }


// const server= http.createServer(handleRequest)
// let PORT = 3000

// server.listen(PORT, ()=>{console.log("server is ready and listening on"
// +PORT)})


// WEEK 2 STARTS HERE

// const express = require("express");

// // const handleAllRequests = (requestObject, responseObject) => {
// //     responseObject.writeHead(200, { 'Content-Type': 'text/html' });
// //     responseObject.write("You are welcome to our backend app");

// //     const url = requestObject.url;
   
// //     responseObject.end();
// };

// const handleHomeRequest = (req, res) => {
//     res.send("<h1>Welcome to the Home Page</h1>");
// }

// const handleLoginRequest = (req, res) => {
//     res.send("<h1>Welcome to the Login Page</h1>");
// }

// const handleSignupRequest = (req, res) => {
//     res.send("<h1>Welcome to the Sign up Page</h1>");
// }

// const handleProfileRequest = (req, res) => {
//     res.send("<h1>Welcome to the Profile Page</h1>");
// }

// const handlePageNotFoundRequest = (req, res) => {
//     res.send("<h1>Page Not Found</h1>");
// }

// const server = http.createServer(handleAllRequests);

// const server = express();

// server.use('/signup', handleSignupRequest);
// server.use('/profile', handleProfileRequest);
// server.use('/login', handleLoginRequest);
// server.use('/', handleHomeRequest);
// server.use(handleAllRequests);


const express = require("express");

const server = express();


//request handling methods
const handleAllTypesofRequests = (req, res) => {
    res.send("Response from server.use");
}

const handleProfilePutRequestType = (req, res) => {
    res.send("Response to profile request with method of value put");
}



server.post('/profile', handleAllTypesofRequests);
server.get('/login', (req, res) => res.send('Hello this is the Login page'))
server.put('/profile', handleProfilePutRequestType);
server.get('/signup', (req, res) => res.send('from signup for get method'))
server.post('/signup', (req, res) => res.send('from signup for post method'))
server.delete('/signup', (req, res) => res.send('from signup for delete method'))
server.put('/signup', (req, res) => res.send('from signup for put method'))
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is ready and listening on port ${PORT}`);
});




