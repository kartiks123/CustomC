/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from './components/CustomButton';

// App component
const App = () => {
  return (
    // Rendering CustomButton component with different props
    <View style={styles.container}>
      <CustomButton
        title="Button 1"
        buttonStyle={{backgroundColor: 'lightblue', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 1 pressed!')}
        onLongPress={() => console.log('Button 1 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 2"
        buttonStyle={{backgroundColor: 'lightcoral', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 2 pressed!')}
        onLongPress={() => console.log('Button 2 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 3"
        buttonStyle={{backgroundColor: 'lightgreen', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 3 pressed!')}
        onLongPress={() => console.log('Button 3 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 4"
        buttonStyle={{backgroundColor: 'lightgrey', width: 200, height: 60}}
        textStyle={{color: 'black', fontSize: 20}}
        onPress={() => console.log('Button 4 pressed!')}
        onLongPress={() => console.log('Button 4 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 5"
        buttonStyle={{backgroundColor: 'lightpink', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 5 pressed!')}
        onLongPress={() => console.log('Button 5 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 6"
        buttonStyle={{backgroundColor: 'lightsalmon', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 6 pressed!')}
        onLongPress={() => console.log('Button 6 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 7"
        buttonStyle={{backgroundColor: 'lightskyblue', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 7 pressed!')}
        onLongPress={() => console.log('Button 7 long pressed!')}
        mode={'text'}
      />
      <CustomButton
        title="Button 8"
        buttonStyle={{backgroundColor: 'lightseagreen', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 8 pressed!')}
        onLongPress={() => console.log('Button 8 long pressed!')}
        mode={'text'}
      />
      <CustomButton mode={'text'} />
    </View>
  );
};

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
