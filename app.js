const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    // Set the response header with content type
    res.setHeader('Content-Type', 'text/html');

    // Simulate an asynchronous operation with a delay
    setTimeout(() => {
        fs.readFile('index.html', function(error, data) {
            if (error) {
                // If file not found, send 404 status
                res.writeHead(404);
                res.end('Error: file not found');
            } else {
                // If file found, send 200 status and file content
                res.writeHead(200);
                res.end(data);
            }
        });
    }, 5000); // Simulate a delay of 5 seconds
});

server.listen(port, hostname, function(error) {
    if (error) {
        console.log('Something went wrong: ' + error);
    } else {
        console.log(`Server is listening on http://${hostname}:${port}/`);
    }
});
