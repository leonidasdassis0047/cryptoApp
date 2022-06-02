import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { HTTPException } from '../../utils';
import { ICrypto, ICryptoData } from './interfaces';

export const fetchCryptoAssetDetails = async (
  cryptoId: string
): Promise<ICrypto | void> => {
  try {
    const uri = `${process.env.MESSARI_BASE_URL_V1}/assets/${cryptoId}`;
    const config: AxiosRequestConfig = {
      headers: {
        'x-messari-api-key': String(process.env.MESSARI_API_KEY)
      }
    };
    const { data } = await axios.get<ICrypto>(uri, config);
    return data;
  } catch (error: any) {
    throw new HTTPException(
      error?.response?.status,
      `Crypto with ID: '${cryptoId}' was not found`
    );
  }
};

export const fetchCryptoAssets = async (): Promise<ICrypto[] | void> => {
  try {
    const uri = `${process.env.MESSARI_BASE_URL_V1}/assets?fields=id,slug,symbol,metrics/market_data/price_usd`;
    const config: AxiosRequestConfig = {
      headers: {
        'x-messari-api-key': String(process.env.MESSARI_API_KEY)
      }
    };
    const { data } = await axios.get<ICryptoData>(uri, config);
    return data.data;
  } catch (error: any) {
    throw new HTTPException(error?.response?.status, error?.message);
  }
};
