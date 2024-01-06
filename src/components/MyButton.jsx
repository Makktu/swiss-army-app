import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../admin/globalStyles';

export default function MyButton({ whenPressed, style, children }) {
  return (
    <View style={[{ borderRadius: 10 }, style]}>
      <Pressable
        onPress={whenPressed}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={style}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
