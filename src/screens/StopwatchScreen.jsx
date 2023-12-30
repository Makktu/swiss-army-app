import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function StopwatchScreen() {
  const [stopWatchTime, setStopWatchTime] = useState('00:00');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.stopwatch}>{stopWatchTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1c1c',
    alignItems: 'center',
  },
  stopwatch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 60,
  },
});
