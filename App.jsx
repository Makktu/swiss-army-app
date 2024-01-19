import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import StopwatchScreen from './src/screens/StopwatchScreen';
import PressureAlarmScreen from './src/screens/PressureAlarmScreen';
import PressureAlarmSettingsScreen from './src/screens/PressureAlarmSettingsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Settings() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SETTINGS' component={PressureAlarmSettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={styles.universalScreenStyle}>
          <Drawer.Screen name='HOME' component={HomeScreen} />
          <Drawer.Screen name='STOPWATCH' component={StopwatchScreen} />
          <Drawer.Screen
            name='PRESSURE ALARM'
            component={PressureAlarmScreen}
          />
          <Drawer.Screen
            name='Settings'
            component={Settings}
            options={{ presentation: 'modal' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1e1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  universalScreenStyle: {
    sceneContainerStyle: {
      backgroundColor: '#292a34',
    },
    contentStyle: {
      backgroundColor: '#292d34',
    },

    headerStyle: {
      backgroundColor: '#292d34',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 22,
    },
    drawerContentStyle: {
      backgroundColor: '#292d34',
    },
    drawerInactiveTintColor: '#e1d3ce',
    drawerActiveTintColor: '#88e588',
    drawerActiveBackgroundColor: '#000005',
  },
});
