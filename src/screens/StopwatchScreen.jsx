import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import CheckScreenDimensions from '../components/CheckScreenDimensions';
import getFormattedTime from '../admin/getFormattedTime';

export default function StopwatchScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [stopWatchTime, setStopWatchTime] = useState(0);
  const [formattedTime, setFormattedTime] = useState('');
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const { height, width } = useWindowDimensions();

  const secondsDuration = 2;

  // useEffect fires every time 🌟stopWatchTime is updated
  // and returns a string formatted for display
  useEffect(() => {
    setFormattedTime(getFormattedTime(stopWatchTime));
  }, [stopWatchTime]);

  // Function to start the stopwatch
  const startStopwatch = () => {
    startTimeRef.current = Date.now() - stopWatchTime * secondsDuration;
    intervalRef.current = setInterval(() => {
      setStopWatchTime(
        Math.floor((Date.now() - startTimeRef.current) / secondsDuration)
      );
    }, secondsDuration);
    setIsRunning(true);
  };

  // Function to pause the stopwatch
  const pauseStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setStopWatchTime(0);
    setFormattedTime('');
    setIsRunning(false);
  };

  // Function to resume the stopwatch
  const resumeStopwatch = () => {
    startTimeRef.current = Date.now() - stopWatchTime * secondsDuration;
    intervalRef.current = setInterval(() => {
      setStopWatchTime(
        Math.floor((Date.now() - startTimeRef.current) / secondsDuration)
      );
    }, secondsDuration);
    setIsRunning(true);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.stopwatchContainer, { minWidth: width }]}>
          <Text
            style={[
              styles.stopwatch,
              { minWidth: width - 30, position: 'absolute' },
            ]}
          >
            {formattedTime ? formattedTime : '00:00:00'}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {isRunning ? (
            <TouchableOpacity
              style={[styles.button, styles.pauseButton]}
              onPress={pauseStopwatch}
            >
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={[styles.button, styles.resumeButton]}
                onPress={startStopwatch}
              >
                <Text style={styles.buttonText}>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={resetStopwatch}
              >
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
            </>
          )}
          {!isRunning && (
            <TouchableOpacity
              style={[styles.button, styles.resumeButton]}
              onPress={resumeStopwatch}
            >
              <Text style={styles.buttonText}>Resume</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <CheckScreenDimensions />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '94%',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  button: {
    margin: 8,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
  stopwatchContainer: {
    flexShrink: 1,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  stopwatch: {
    flexGrow: 0,
    color: 'white',
    fontSize: 70,
    minHeight: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  resetButton: {
    backgroundColor: '#5a5a25',
    padding: 5,
    fontSize: 30,
  },
  resumeButton: {
    backgroundColor: '#275727',
    padding: 5,
    fontSize: 30,
  },
  pauseButton: {
    backgroundColor: '#632525',
    padding: 5,
    fontSize: 30,
  },
});
