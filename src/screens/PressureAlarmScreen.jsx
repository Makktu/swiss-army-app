import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import MyButton from '../components/MyButton';
import CheckScreenDimensions from '../components/CheckScreenDimensions';

export default function PressureAlarmScreen() {
  const [switchPressed, setSwitchPressed] = useState(false);
  const [sound, setSound] = useState();

  async function playBeep() {
    console.log('Loading sound...');
    const { sound } = await Audio.Sound.createAsync(
      require(`./../../assets/sounds/beep.wav`)
    );

    setSound(sound);
    console.log('playing sound...');
    await sound.playAsync();
  }
  async function playAlarm() {
    const { sound } = await Audio.Sound.createAsync(
      require(`./../../assets/sounds/alarm.wav`)
    );
    setSound(sound);
    console.log('playing sound...');
    await sound.playAsync();
  }

  const buttonPressHandler = () => {
    console.log('pressed');
  };
  const longButtonPressHandler = () => {
    console.log('pressed and held');
    playBeep();
    setSwitchPressed(true);
  };
  const releasedHandler = () => {
    if (switchPressed) {
      console.log('alarm!!!');
      playAlarm();
      setSwitchPressed(false);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={switchPressed ? styles.stealthContainer : styles.container}>
      <View style={styles.messageArea}>
        {switchPressed ? (
          <Text style={styles.armedText}>ARMED !</Text>
        ) : (
          <>
            <Text style={styles.unArmedText}>Press AND HOLD</Text>
            <Text style={styles.unArmedText}>this button to ARM</Text>
          </>
        )}
      </View>
      <MyButton
        icon='power-outline'
        size={300}
        color='red'
        whenPressed={buttonPressHandler}
        whenLongPressed={longButtonPressHandler}
        whenReleased={releasedHandler}
        style={
          switchPressed ? styles.stealthPressureSwitch : styles.pressureSwitch
        }
      />
      {/* <CheckScreenDimensions /> */}
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
    // borderRadius: 100,
  },
  stealthPressureSwitch: {
    // width: 200,
    // height: 200,
    backgroundColor: '#131513',
    // borderRadius: 100,
  },
  stealthContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  armedText: {
    fontSize: 40,
    color: 'orangered',
  },
  unArmedText: {
    fontSize: 30,
    color: 'white',
  },
  messageArea: {
    marginBottom: 50,
    textAlign: 'center',
    alignItems: 'center',
  },
});
