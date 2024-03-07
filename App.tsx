/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Alert} from 'react-native';
import Row from './components/Row';

type Operator = '+' | '-' | '*' | '/' | '%';

interface CalculatorState {
  screenValue: string;
  previousOperator?: Operator;
}

function App() {
  const [state, setState] = useState<CalculatorState>({
    screenValue: '0',
    previousOperator: undefined,
  });
  const handleNumber = (value: string) => {
    setState(prevState => ({
      ...prevState,
      screenValue:
        prevState.screenValue === '0' ? value : prevState.screenValue + value,
    }));
  };
  const handleOperator = (value: Operator) => {
    setState(prevState => ({
      ...prevState,
      screenValue:
        prevState.screenValue === '0'
          ? value
          : prevState.previousOperator === value
          ? prevState.screenValue
          : prevState.screenValue + value,
      previousOperator: value,
    }));
  };

  const handleEqual = () => {
    const tokens = state.screenValue.split(/(\+|\-|\*|\/)/);

    let result: number | undefined;
    let currentOperand: number;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (!isNaN(Number(token))) {
        currentOperand = Number(token);
        if (result === undefined) {
          result = currentOperand;
          continue;
        }
        switch (tokens[i - 1]) {
          case '+':
            result += currentOperand;
            break;
          case '-':
            result -= currentOperand;
            break;
          case '*':
            result *= currentOperand;
            break;
          case '/':
            if (currentOperand === 0) {
              return;
            }
            result /= currentOperand;
            break;
          default:
            return;
        }
      }
    }
    if (result !== undefined) {
      setState({screenValue: result.toString()});
    }
  };
  const handleRemove = () => {
    setState(prevState => ({
      ...prevState,
      screenValue:
        prevState.screenValue.length > 1
          ? prevState.screenValue.slice(0, -1)
          : '0',
    }));
  };
  const handleClear = () => {
    Alert.alert('Cleard', 'clear button work');
    setState({
      screenValue: '0',
      previousOperator: undefined,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.screenText}>{state.screenValue}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Row
            buttons={[
              {value: 'C', onPress: handleClear},
              {value: '%', onPress: () => handleOperator('%')},
              {value: 'X', onPress: handleRemove},
              {value: '/', onPress: () => handleOperator('/')},
            ]}
          />
          <Row
            buttons={[
              {value: '7', onPress: () => handleNumber('7')},
              {value: '8', onPress: () => handleNumber('8')},
              {value: '9', onPress: () => handleNumber('9')},
              {value: 'X', onPress: () => handleOperator('*')},
            ]}
          />
          <Row
            buttons={[
              {value: '4', onPress: () => handleNumber('4')},
              {value: '5', onPress: () => handleNumber('5')},
              {value: '6', onPress: () => handleNumber('6')},
              {value: '-', onPress: () => handleOperator('-')},
            ]}
          />
          <Row
            buttons={[
              {value: '1', onPress: () => handleNumber('1')},
              {value: '2', onPress: () => handleNumber('2')},
              {value: '3', onPress: () => handleNumber('3')},
              {value: '+', onPress: () => handleOperator('+')},
            ]}
          />
          <Row
            buttons={[
              {value: '00', onPress: () => handleNumber('00')},
              {value: '0', onPress: () => handleNumber('0')},
              {value: '.', onPress: () => {}},
              {value: '=', onPress: handleEqual, isEqualButton: true},
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
