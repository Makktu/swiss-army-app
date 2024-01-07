import { Text, View, useWindowDimensions } from 'react-native';
import React from 'react';

export default function CheckScreenDimensions() {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ margin: 30 }}>
      <Text style={{ color: 'white' }}>Screen Height: {height}</Text>
      <Text style={{ color: 'white' }}>Screen Width: {width}</Text>
    </View>
  );
}
