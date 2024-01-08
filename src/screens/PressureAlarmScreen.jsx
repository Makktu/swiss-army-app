import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
// import Sound from 'react-native-sound';
import MyButton from '../components/MyButton';

// Sound.setCategory('Playback');

export default function PressureAlarmScreen() {
  const [switchPressed, setSwitchPressed] = useState(false);
  const buttonPressHandler = () => {
    console.log('pressed');
  };
  const longButtonPressHandler = () => {
    console.log('pressed and held');
    setSwitchPressed(true);
  };
  const switchReleasedHandler = () => {
    if (switchPressed) {
      console.log('alarm!!!');
      setSwitchPressed(false);
    }
  };
  return (
    <View style={switchPressed ? styles.stealthContainer : styles.container}>
      <MyButton
        whenPressed={buttonPressHandler}
        whenLongPressed={longButtonPressHandler}
        whenSwitchReleased={switchReleasedHandler}
        style={
          switchPressed ? styles.stealthPressureSwitch : styles.pressureSwitch
        }
      >
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
  stealthPressureSwitch: {
    width: 200,
    height: 200,
    backgroundColor: '#131513',
    borderRadius: 100,
  },
  stealthContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
