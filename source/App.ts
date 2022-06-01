import express from 'express';

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
  };
}
