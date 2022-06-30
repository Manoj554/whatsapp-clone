import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PRODUCTION_SERVER_URL : process.env.NEXT_PUBLIC_SERVER_URL;

const socket = io(URL, { autoConnect: false, transports: ['websocket'] });

export default socket;