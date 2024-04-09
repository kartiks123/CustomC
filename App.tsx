/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from './components/CustomButton';

const App = () => {
  const handleButtonPress = (buttonNumber: number) => {
    console.log(`Button ${buttonNumber} pressed!`);
  };

  // Define an array of colors for each button
  const buttonColors = [
    'lightblue',
    'lightcoral',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightskyblue',
    'lightseagreen',
  ];

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((buttonNumber, index) => (
        <View style={styles.buttonWrapper} key={buttonNumber}>
          <CustomButton
            title={`Button ${buttonNumber}`}
            buttonStyle={{backgroundColor: buttonColors[index]}}
            onPress={() => handleButtonPress(buttonNumber)}
            mode={'outlined'}
          />
        </View>
      ))}

      {/* Default CustomButton without any props */}
      <CustomButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom: 15,
  },
});

export default App;
