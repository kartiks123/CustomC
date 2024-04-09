import React from 'react';
import {Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper'; // Importing TouchableRipple from react-native-paper package for ripple effect on button press

/*
 * CustomButtonProps is an interface that defines the props that are passed to the CustomButton component.
 * title: string; // Title of the button
 * buttonStyle: ViewStyle; // Style of the button
 * textStyle: TextStyle; // Style of the text inside the button
 * onPress: () => void; // Function to be called on button press
 * onLongPress: () => void; // Function to be called on long press
 */
interface CustomButtonProps {
  title?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  onLongPress?: () => void;
  icon?: string;
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
}

/*
 * CustomButton is a functional component that renders a custom button with ripple effect.
 * It takes CustomButtonProps as a parameter.
 * Props are passed to the component to customize the button appearance and behavior such as title, buttonStyle, textStyle, onPress, and onLongPress.
 */
const CustomButton: React.FC<CustomButtonProps> = ({
  title = 'Default Button',
  buttonStyle,
  textStyle,
  onPress,
  onLongPress,
}) => {
  return (
    // TouchableRipple is used to create a button with ripple effect on press.
    <TouchableRipple
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableRipple>
  );
};

// Styles for the CustomButton component
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
