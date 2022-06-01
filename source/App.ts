import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

export default class Application {
  private expressApp: express.Application;

  constructor(private port: number) {
    this.expressApp = express();

    this.initialiseAppMiddlewares();
  }

  public startListening = () => {
    this.expressApp.listen(this.port, () => console.log('server on'));
  };

  private initialiseAppMiddlewares = () => {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded());
    this.expressApp.use(cors());
    this.expressApp.use(helmet());
    this.expressApp.use(compression());
    this.expressApp.use(morgan('common'));
  };
}
