import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';

const Home = () => {
  const [cryptos, setCryptos] = useState([
    {
      id: '1e31218a-e44e-4285-820c-8282ee222035',
      slug: 'bitcoin',
      symbol: 'BTC',
      metrics: {
        market_data: {
          price_usd: 29946.91941664303,
        },
      },
    },
    {
      id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
      slug: 'ethereum',
      symbol: 'ETH',
      metrics: {
        market_data: {
          price_usd: 1823.4030523970487,
        },
      },
    },
    {
      id: '51f8ea5e-f426-4f40-939a-db7e05495374',
      slug: 'tether',
      symbol: 'USDT',
      metrics: {
        market_data: {
          price_usd: 0.999796340375251,
        },
      },
    },
    {
      id: '4515ba15-2719-4183-b0ca-b9255d55b67e',
      slug: 'usd-coin',
      symbol: 'USDC',
      metrics: {
        market_data: {
          price_usd: 1.0002728925071107,
        },
      },
    },
    {
      id: '7dc551ba-cfed-4437-a027-386044415e3e',
      slug: 'binance-coin',
      symbol: 'BNB',
      metrics: {
        market_data: {
          price_usd: 303.2214023934015,
        },
      },
    },
    {
      id: '362f0140-ecdd-4205-b8a0-36f0fd5d8167',
      slug: 'cardano',
      symbol: 'ADA',
      metrics: {
        market_data: {
          price_usd: 0.580933245645652,
        },
      },
    },
    {
      id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
      slug: 'xrp',
      symbol: 'XRP',
      metrics: {
        market_data: {
          price_usd: 0.3957175503695344,
        },
      },
    },
    {
      id: '5da7bde4-61e9-4a6f-9fc3-7ed66effb198',
      slug: 'binance-usd',
      symbol: 'BUSD',
      metrics: {
        market_data: {
          price_usd: 1.0002910521641717,
        },
      },
    },
    {
      id: 'b3d5d66c-26a2-404c-9325-91dc714a722b',
      slug: 'solana',
      symbol: 'SOL',
      metrics: {
        market_data: {
          price_usd: 39.720540979893975,
        },
      },
    },
    {
      id: '7d793fa7-5fc6-432a-b26b-d1b10769d42e',
      slug: 'dogecoin',
      symbol: 'DOGE',
      metrics: {
        market_data: {
          price_usd: 0.08125753324085166,
        },
      },
    },
    {
      id: 'da6a0575-ec95-4c47-855d-5fc6a3e22ada',
      slug: 'polkadot',
      symbol: 'DOT',
      metrics: {
        market_data: {
          price_usd: 9.53261220803746,
        },
      },
    },
    {
      id: '81bbf507-29d5-4458-8d42-b81d7c197996',
      slug: 'wrapped-bitcoin',
      symbol: 'WBTC',
      metrics: {
        market_data: {
          price_usd: 29980.169406010293,
        },
      },
    },
    {
      id: '1c077d6e-99c7-491c-b24d-1d359011cd81',
      slug: 'tron',
      symbol: 'TRX',
      metrics: {
        market_data: {
          price_usd: 0.08231792883630444,
        },
      },
    },
    {
      id: 'a3b64831-4288-48bd-a3e7-eb4f77f6f740',
      slug: 'dai',
      symbol: 'DAI',
      metrics: {
        market_data: {
          price_usd: 1.0000204443413911,
        },
      },
    },
    {
      id: '2db6b38a-681a-4514-9d67-691e319597ee',
      slug: 'avalanche',
      symbol: 'AVAX',
      metrics: {
        market_data: {
          price_usd: 23.551683073893265,
        },
      },
    },
    {
      id: '8c4f84a7-6484-4074-8c17-fe363a243e7f',
      slug: 'shiba-inu',
      symbol: 'SHIB',
      metrics: {
        market_data: {
          price_usd: 0.000010967230418771418,
        },
      },
    },
    {
      id: '4b474270-99ba-4a18-869d-11cd3fc0201a',
      slug: 'polygon',
      symbol: 'MATIC',
      metrics: {
        market_data: {
          price_usd: 0.6044215291631965,
        },
      },
    },
    {
      id: '28681c70-d3a1-4139-942e-c4bdcc49ad64',
      slug: 'unus-sed-leo',
      symbol: 'LEO',
      metrics: {
        market_data: {
          price_usd: 4.928073314170634,
        },
      },
    },
    {
      id: 'de533c50-6a57-4975-bb83-62862fb9af09',
      slug: 'cronos',
      symbol: 'CRO',
      metrics: {
        market_data: {
          price_usd: 0.1808,
        },
      },
    },
    {
      id: 'c7c3697d-1b9c-42bf-9664-a366634ce2b3',
      slug: 'litecoin',
      symbol: 'LTC',
      metrics: {
        market_data: {
          price_usd: 63.328595140536436,
        },
      },
    },
  ]);

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={[styles.title]}>Crypto Currencies Market</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="search currency" />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.headline}>Currency Market</Text>
        <FlatList
          data={cryptos}
          showsVerticalScrollIndicator={false}
          keyExtractor={crypto => crypto.id.toString()}
          style={{paddingVertical: 12}}
          renderItem={({item: crypto}) => (
            <View style={styles.cryptoCard}>
              <Text>{crypto.symbol}</Text>
              <Text>{crypto.slug}</Text>
              <Text>{crypto.metrics.market_data.price_usd}</Text>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#6200EA',
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    zIndex: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    minHeight: 40,
    borderRadius: 4,
    elevation: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff0',
    padding: 4,
    position: 'absolute',
    bottom: -20,
    alignItems: 'center',
  },
  bottom: {backgroundColor: '#ffffff', flex: 1, padding: 4, paddingTop: 20},
  headline: {fontSize: 20, fontWeight: '700'},
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    top: 12,
  },
  cryptoCard: {
    height: 100,
    width: '100%',
    borderRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
});
