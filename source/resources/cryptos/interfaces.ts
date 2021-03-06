export interface ICrypto {
  id: string;
  slug: string;
  symbol: string;
}

export interface ICryptoData {
  data: ICrypto[];
}
