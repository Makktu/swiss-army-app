import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/screens/Welcome';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Welcome />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
