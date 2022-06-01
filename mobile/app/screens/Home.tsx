import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';

const Home = () => {
  const cryptos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
          keyExtractor={crypto => crypto.toString()}
          style={{paddingVertical: 12}}
          renderItem={() => <View style={styles.cryptoCard} />}
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
    height: 140,
    width: '100%',
    borderRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
});
