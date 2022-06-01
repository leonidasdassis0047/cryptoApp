import {StyleSheet, View} from 'react-native';
import React from 'react';

const ScreenWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
