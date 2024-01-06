import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyButton from '../components/MyButton';
import { useState, useRef, useEffect } from 'react';
import getFormattedTime from '../admin/getFormattedTime';

export default function StopwatchScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [stopWatchTime, setStopWatchTime] = useState(58);
  const [formattedTime, setFormattedTime] = useState('00:00:00');
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    console.log(stopWatchTime);
    setFormattedTime(getFormattedTime(stopWatchTime));
  }, [stopWatchTime]);

  // Function to start the stopwatch
  const startStopwatch = () => {
    startTimeRef.current = Date.now() - stopWatchTime * 1000;
    intervalRef.current = setInterval(() => {
      setStopWatchTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
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
    setFormattedTime('00:00:00');
    setIsRunning(false);
  };

  // Function to resume the stopwatch
  const resumeStopwatch = () => {
    startTimeRef.current = Date.now() - stopWatchTime * 1000;
    intervalRef.current = setInterval(() => {
      setStopWatchTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    setIsRunning(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.stopwatch}>{formattedTime}</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1e1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '94%',
    justifyContent: 'space-between',
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
  stopwatch: {
    color: 'white',
    fontSize: 80,
    marginBottom: '20%',
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
