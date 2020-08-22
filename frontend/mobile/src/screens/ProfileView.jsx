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

const ProfileView = () => (
  <View style={styles.center}>
    <Text>This is the profile screen</Text>
  </View>
);

export default ProfileView;
