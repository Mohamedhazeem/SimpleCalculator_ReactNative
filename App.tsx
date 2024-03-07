/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Row from './components/Row';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.screenText}>1 + 1</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Row
            buttons={[
              {value: 'C', onPress: () => {}},
              {value: '%', onPress: () => {}},
              {value: 'X', onPress: () => {}},
              {value: '/', onPress: () => {}},
            ]}
          />
          <Row
            buttons={[
              {value: '7', onPress: () => {}},
              {value: '8', onPress: () => {}},
              {value: '9', onPress: () => {}},
              {value: 'X', onPress: () => {}},
            ]}
          />
          <Row
            buttons={[
              {value: '4', onPress: () => {}},
              {value: '5', onPress: () => {}},
              {value: '6', onPress: () => {}},
              {value: '-', onPress: () => {}},
            ]}
          />
          <Row
            buttons={[
              {value: '2', onPress: () => {}},
              {value: '1', onPress: () => {}},
              {value: '3', onPress: () => {}},
              {value: '+', onPress: () => {}},
            ]}
          />
          <Row
            buttons={[
              {value: '00', onPress: () => {}},
              {value: '0', onPress: () => {}},
              {value: '.', onPress: () => {}},
              {value: '=', onPress: () => {}, isEqualButton: true},
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    backgroundColor: 'paleturquoise',
    width: '100%',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  screenText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonsContainer: {
    flex: 2,
    gap: 7,
    justifyContent: 'center',
    backgroundColor: 'lightslategrey',
    width: '100%',
    padding: 7,
  },
});

export default App;
