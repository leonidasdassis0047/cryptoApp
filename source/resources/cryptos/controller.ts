import { Router } from 'express';
import { IController } from '../../utils/interfaces';

export class CryptoController implements IController {
  public path = '/cryptos';
  public router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes = () => {
    this.router.route(this.path).get();
  };
}
