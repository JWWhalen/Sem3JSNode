const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Justin! How are you today?');
});


console.log("It is a rainy day!");
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})