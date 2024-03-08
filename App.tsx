/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Row from './components/Row';
import {
  Operator,
  handleNumber,
  handleOperator,
  handleEqual,
  handleRemove,
  handleClear,
} from './utils/calculatorLogic';

export interface CalculatorState {
  screenValue: string;
  previousOperator?: Operator;
}

function App() {
  const [state, setState] = useState<CalculatorState>({
    screenValue: '0',
    previousOperator: undefined,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.screenText}>{state.screenValue}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Row
            buttons={[
              {
                value: 'C',
                onPress: () => handleClear(setState),
              },
              {
                value: '%',
                onPress: () =>
                  handleOperator({value: Operator.MODULO, setState}),
              },
              {
                value: 'X',
                isBackscapeButton: true,
                onPress: () => handleRemove(setState),
              },
              {
                value: '/',
                onPress: () =>
                  handleOperator({value: Operator.DIVIDE, setState}),
              },
            ]}
          />
          <Row
            buttons={[
              {value: '7', onPress: () => handleNumber({value: '7', setState})},
              {value: '8', onPress: () => handleNumber({value: '8', setState})},
              {value: '9', onPress: () => handleNumber({value: '9', setState})},
              {
                value: 'X',
                onPress: () =>
                  handleOperator({value: Operator.MULTIPLY, setState}),
              },
            ]}
          />
          <Row
            buttons={[
              {value: '4', onPress: () => handleNumber({value: '4', setState})},
              {value: '5', onPress: () => handleNumber({value: '5', setState})},
              {value: '6', onPress: () => handleNumber({value: '6', setState})},
              {
                value: '-',
                onPress: () =>
                  handleOperator({value: Operator.SUBTRACT, setState}),
              },
            ]}
          />
          <Row
            buttons={[
              {value: '1', onPress: () => handleNumber({value: '1', setState})},
              {value: '2', onPress: () => handleNumber({value: '2', setState})},
              {value: '3', onPress: () => handleNumber({value: '3', setState})},
              {
                value: '+',
                onPress: () => handleOperator({value: Operator.ADD, setState}),
              },
            ]}
          />
          <Row
            buttons={[
              {
                value: '00',
                onPress: () => handleNumber({value: '00', setState}),
              },
              {value: '0', onPress: () => handleNumber({value: '0', setState})},
              {
                value: '.',
                onPress: () => handleNumber({value: '.', setState}),
              },
              {
                value: '=',
                onPress: () =>
                  handleEqual({value: state.screenValue, setState}),
                isEqualButton: true,
              },
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
    backgroundColor: '#202020',
    width: '100%',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  screenText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonsContainer: {
    flex: 2,
    gap: 8,
    justifyContent: 'center',
    backgroundColor: '#202020',
    width: '100%',
    padding: 10,
  },
});

export default App;
