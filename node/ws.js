import express from 'express';
import WebSocket from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server: server });

wsServer.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Received:', message);
    });
    ws.send(`Echo: ${message}`);

});


app.get('/', (req, res) => {
    res.send('WebSocket server is running');
});

server.listen(4000, () => {
    console.log('Server is listening on port 3000');
});  