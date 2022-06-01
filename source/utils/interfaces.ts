import { Router } from 'express';

// events when sending or emitting or broadcasting events from the server
export interface ServerToClientEvents {
  //   noArg: () => void;
  //   basicEmit: (a: number, b: string, c: Buffer) => void;
  //   withAck: (d: string, callback: (e: number) => void) => void;
  cryptos: (cryptos: string[]) => void;
  greetings: (greeting: string) => void;
}

// receiving events from the client.
export interface ClientToServerEvents {
  crypto: () => void;
  message: (message: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

// controller classes
export interface IController {
  router: Router;
  path: string;
}
