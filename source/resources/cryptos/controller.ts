import { NextFunction, Request, Response, Router } from 'express';
import { AsyncHandler } from '../../utils';
import { IController } from '../../utils/interfaces';

export class CryptoController implements IController {
  public path = '/cryptos';
  public router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes = () => {
    this.router
      .route(this.path)
      .get(AsyncHandler(this.getCryptosInRealtime.bind(this)));
  };

  //   ==========================================
  private getCryptosInRealtime = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      response.status(200).send('cryptos incoming');
    } catch (error: any) {
      next(error);
    }
  };
}
