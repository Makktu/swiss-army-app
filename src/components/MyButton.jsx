import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyButton({
  icon,
  size,
  color = 'white',
  whenPressed,
  whenLongPressed,
  whenReleased,
}) {
  return (
    <Pressable
      onPress={whenPressed}
      onLongPress={whenLongPressed}
      onPressOut={whenReleased}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  icon: {
    fontSize: 36,
  },
  pressed: {
    opacity: 0.5,
    color: 'gray',
  },
});
