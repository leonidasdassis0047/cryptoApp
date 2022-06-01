import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {io} from 'socket.io-client';
import {HomeScreen} from './app/screens';

const App = () => {
  const socket = io('http://192.168.36.233:5000');

  socket.emit('message', 'Lets do cryptos');

  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
