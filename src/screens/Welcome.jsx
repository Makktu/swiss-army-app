import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SWISS ARMY APP!</Text>
      <Text style={styles.text}>SWISS ARMY APP!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
