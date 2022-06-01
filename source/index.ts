import 'dotenv/config';
import { Server } from 'socket.io';
import axios from 'axios';

import Application from './App';
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData
} from './utils/interfaces';
import { IController } from './utils/interfaces';

const controllers: IController[] = [];
const app = new Application(5000, controllers);
const server = app.startListening();

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {});

io.on('connection', (socket) => {
  socket.on('message', (message: string) => {
    console.log(message);
    // io.emit('greetings', 'Welcome to sockets with postman');
  });
});
