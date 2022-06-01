import axios from 'axios';
import { NextFunction, Request, Response, Router } from 'express';
import { AsyncHandler } from '../../utils';
import { IController } from '../../utils/interfaces';
import { ICrypto, ICryptoData } from './interfaces';

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
    const MESSARI_API_URL =
      'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd';

    const { data } = await axios.get<ICryptoData>(MESSARI_API_URL);
    data.data.map((crypto) => {
      console.log(crypto);
    });

    response.status(200).send({ cryptos: data.data });
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
