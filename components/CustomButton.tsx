import React from 'react';
import {Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

interface CustomButtonProps {
  title?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  onLongPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = 'Default Button',
  buttonStyle,
  textStyle,
  onPress,
  onLongPress,
}) => {
  return (
    <TouchableRipple
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableRipple>
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
