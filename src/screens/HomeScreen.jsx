import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.title}>
        <Text style={styles.text}>SWISS ARMY APP</Text>
      </View> */}
      <View style={styles.main}>
        <Text style={styles.mainText}>
          This app{'\n'}is an app{'\n'}made of{'\n'}apps.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1e1c1c',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 50,
  },
  main: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 22,
    color: 'white',
  },
});
