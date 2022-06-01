import 'dotenv/config';
import { Server } from 'socket.io';
import axios from 'axios';

import Application from './App';
import {
  ClientToServerEvents,
  IController,
  InterServerEvents,
  ServerToClientEvents,
  SocketData
} from './utils/interfaces';
import { CryptoController } from './resources';

const controllers: IController[] = [new CryptoController()];
const app = new Application(5000, controllers);
const server = app.startListening();

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, {});

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('message', (message: string) => {
    console.log(message);
  });
});
