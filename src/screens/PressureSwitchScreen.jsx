import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';

export default function PressureSwitchScreen() {
  const buttonPressHandler = () => {
    console.log('pressed');
    console.log('pressed and held');
  };
  return (
    <View style={styles.container}>
      <MyButton whenPressed={buttonPressHandler} style={styles.pressureSwitch}>
        PRESS
      </MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressureSwitch: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    borderRadius: 100,
  },
});
