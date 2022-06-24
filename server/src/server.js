import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import socketConnection from './socket.js';


dotenv.config();

const port = process.env.PORT;
const app = express();
const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
    }
});

io.on('connection', (socket) => {
    console.log('socket connected with id ' + socket.id);
    socketConnection(io, socket);
})


httpServer.listen(port, () => console.log(`server running on port 5000`));
