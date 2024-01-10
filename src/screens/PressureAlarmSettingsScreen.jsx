import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import MyButton from '../components/MyButton';

export default function PressureAlarmSettingsScreen() {
  return (
    <View>
      <MyButton icon='cog-outline' size={46} color='yellow' />
    </View>
  );
}

const styles = StyleSheet.create({});
