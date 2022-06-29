import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { socketIndivisual } from './controllers/socket.js';


dotenv.config();

const port = process.env.PORT;
const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
    }
});

io.use((socket, next) => {
    const { name } = socket.handshake.auth;

    if (!name) {
        return next(new Error("user name not found"));
    }
    socket.name = name;
    next();
});

io.on('connection', (socket) => {
    console.log(`one user connected id:- ${socket.id}`);
    socketIndivisual(io, socket);
});

httpServer.listen(port, () => console.log(`server running on port 5000`));
