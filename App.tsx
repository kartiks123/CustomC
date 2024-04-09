import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from './components/CustomButton';

const App = () => {
  const handleLongPress = (buttonNumber: number) => {
    console.log(`Button ${buttonNumber} long pressed!`);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="Button 1"
        buttonStyle={{backgroundColor: 'lightblue', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 1 pressed!')}
        onLongPress={() => handleLongPress(1)}
      />

      <CustomButton
        title="Button 2"
        buttonStyle={{backgroundColor: 'lightcoral', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 2 pressed!')}
        onLongPress={() => handleLongPress(2)}
      />

      <CustomButton
        title="Button 3"
        buttonStyle={{backgroundColor: 'lightgreen', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 3 pressed!')}
        onLongPress={() => handleLongPress(3)}
      />

      <CustomButton
        title="Button 4"
        buttonStyle={{backgroundColor: 'lightgrey', width: 200, height: 60}}
        textStyle={{color: 'black', fontSize: 20}}
        onPress={() => console.log('Button 4 pressed!')}
        onLongPress={() => handleLongPress(4)}
      />

      <CustomButton
        title="Button 5"
        buttonStyle={{backgroundColor: 'lightpink', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 5 pressed!')}
        onLongPress={() => handleLongPress(5)}
      />

      <CustomButton
        title="Button 6"
        buttonStyle={{backgroundColor: 'lightsalmon', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 6 pressed!')}
        onLongPress={() => handleLongPress(6)}
      />

      <CustomButton
        title="Button 7"
        buttonStyle={{backgroundColor: 'lightskyblue', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 7 pressed!')}
        onLongPress={() => handleLongPress(7)}
      />

      <CustomButton
        title="Button 8"
        buttonStyle={{backgroundColor: 'lightseagreen', width: 200, height: 60}}
        textStyle={{color: 'white', fontSize: 20}}
        onPress={() => console.log('Button 8 pressed!')}
        onLongPress={() => handleLongPress(8)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
