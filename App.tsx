/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from './components/CustomButton';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 1"
          buttonStyle={{backgroundColor: 'lightblue', width: 200, height: 60}}
          onPress={() => console.log('Button 1 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 2"
          buttonStyle={{backgroundColor: 'lightcoral'}}
          textStyle={{fontSize: 25}}
          onPress={() => console.log('Button 2 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 3"
          buttonStyle={{backgroundColor: 'lightgreen'}}
          onPress={() => console.log('Button 3 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 4"
          buttonStyle={{backgroundColor: 'lightgrey'}}
          textStyle={{color: 'black'}}
          onPress={() => console.log('Button 4 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 5"
          buttonStyle={{backgroundColor: 'lightpink'}}
          onPress={() => console.log('Button 5 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 6"
          buttonStyle={{backgroundColor: 'lightsalmon'}}
          onPress={() => console.log('Button 6 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 7"
          buttonStyle={{backgroundColor: 'lightskyblue'}}
          onPress={() => console.log('Button 7 pressed!')}
          mode={'outlined'}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Button 8"
          buttonStyle={{backgroundColor: 'lightseagreen'}}
          onPress={() => console.log('Button 8 pressed!')}
          mode={'outlined'}
        />
      </View>

      <CustomButton mode={'outlined'} />
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
