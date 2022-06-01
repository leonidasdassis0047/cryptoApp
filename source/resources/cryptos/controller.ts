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
    this.router.param(
      'cryptoId',
      (request: Request, response: Response, next: NextFunction): void => {
        console.log(
          'handling router param for crypto: ',
          request.params.cryptoId
        );
        next();
      }
    );

    this.router
      .route(this.path)
      .get(AsyncHandler(this.getCryptosInRealtime.bind(this)));

    this.router
      .route(this.path + '/:cryptoId')
      .get(AsyncHandler(this.getCryptoDetails.bind(this)));
  };

  //   ==========================================
  //   controllers below
  //   ==========================================

  //   get all cryptos in realtime.
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

  //   get single crypto information
  private getCryptoDetails = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      response.status(200).send('single crypto incoming');
    } catch (error: any) {
      next(error);
    }
  };
}
