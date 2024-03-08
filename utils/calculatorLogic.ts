/* eslint-disable prettier/prettier */
import React from 'react';
import {CalculatorState} from '../App';

export const enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/',
    MODULO = '%',
    DOT = '.',
  }

interface HandleNumber {
  value: string;
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}
interface HandleOperator {
  value: Operator;
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}
interface HandleEqual {
  value: string;
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}
export const handleNumber = ({value, setState}: HandleNumber) => {
  setState(prevState => ({
    ...prevState,
    screenValue:
      prevState.screenValue === '0' ? value : prevState.screenValue + value,
    previousOperator: undefined,
  }));
};

export const handleOperator = ({value, setState}: HandleOperator) => {


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

export const handleEqual = ({value, setState}: HandleEqual) => {
  const tokens = value.split(/(\+|\-|\*|\/|\%)/);

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
        case Operator.ADD:
          result += currentOperand;
          break;
        case Operator.SUBTRACT:
          result -= currentOperand;
          break;
        case Operator.MULTIPLY:
          result *= currentOperand;
          break;
        case Operator.MODULO:
            result %= currentOperand;
            break;
        case Operator.DIVIDE:
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

export const handleRemove = (
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>,
) => {
  setState(prevState => ({
    ...prevState,
    screenValue:
      prevState.screenValue.length > 1
        ? prevState.screenValue.slice(0, -1)
        : '0',
    previousOperator: undefined,
  }));
};
export const handleClear = (
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>,
) => {
  setState({
    screenValue: '0',
    previousOperator: undefined,
  });
};
