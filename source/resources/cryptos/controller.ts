import axios from 'axios';
import { NextFunction, Request, Response, Router } from 'express';
import { AsyncHandler, HTTPException } from '../../utils';
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
  //   crypto controllers below
  //   ==========================================

  //   get all cryptos in realtime.
  private getCryptosInRealtime = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const uri = `${process.env.MESSARI_BASE_URL_V1}/assets?fields=id,slug,symbol,metrics/market_data/price_usd`;

    const { data } = await axios.get<ICryptoData>(uri);
    const cryptos = data.data;

    response
      .status(200)
      .send({ error: false, results: cryptos.length, cryptos });
  };

  //   get single crypto information
  private getCryptoDetails = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const cryptoId = request.params.cryptoId;
    const uri = `${process.env.MESSARI_BASE_URL_V1}/assets/${cryptoId}`;
    const { data } = await axios.get<ICrypto>(uri, {
      headers: {
        'x-messari-api-key': String(process.env.MESSARI_API_KEY)
      }
    });

    if (!data) {
      next(new HTTPException(404, 'Asset not found'));
      return;
    }

    const crypto = data;
    response.status(200).send({ error: false, crypto });
  };
}
