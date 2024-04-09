/* eslint-disable @typescript-eslint/no-unused-vars */
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
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'; // Made mode prop optional
  buttonNumber?: number; // New prop to identify button number
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = 'Default Button',
  buttonStyle = {},
  textStyle = {},
  onPress,
  buttonNumber, // button number prop
  mode = 'outlined', // Default mode
  style = {},
}) => {
  const handlePress = () => {
    // If onPress is provided, call it
    if (onPress) {
      onPress();
    } else {
      // Otherwise, log the default message with button number
      console.log(`Button ${buttonNumber} pressed!`);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress} // Use handlePress instead of directly onPress prop
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
