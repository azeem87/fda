import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});

const CartView = () => (
  <View style={styles.center}>
    <Text>This is the cart screen</Text>
  </View>
);

export default CartView;
