import React from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

interface CustomButtonProps {
  title?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  style?: ViewStyle; // New style prop
  icon?: string;
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = 'Default Button',
  buttonStyle = {},
  textStyle = {},
  onPress,
  style = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', // Default button bg color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10, // Setting Border Radius
    marginTop: 20,
    width: 200, // Default Width
    height: 60, // Default Height
  },
  buttonText: {
    fontSize: 20, // Default Font Size
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
});

export default CustomButton;
