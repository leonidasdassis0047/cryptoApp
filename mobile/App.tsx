import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {io} from 'socket.io-client';
import {CryptoDetailsScreen, HomeScreen} from './app/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const socket = io('http://192.168.137.1:5000');
  const [cryptos, setCryptos] = useState([]);

  socket.emit('message', 'Lets do cryptos');
  socket.emit('getCryptos');
  // socket.on('getCryptos', data => {
  //   console.log(cryptos);
  //   setCryptos(data);
  // });

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CryptoDetails" component={CryptoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
