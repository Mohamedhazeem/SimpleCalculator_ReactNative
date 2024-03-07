/* eslint-disable prettier/prettier */
import React from 'react';

import {Pressable, StyleSheet, Text} from 'react-native';

export interface ButtonProps {
  value: string;
  onPress?: () => void;
  isEqualButton?: boolean;
}

export const Button = ({value, onPress, isEqualButton}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        isEqualButton
          ? {...styles.common, ...styles.equalButton}
          : {...styles.common, ...styles.button}
      }>
      <Text style={styles.buttonText}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  common: {
    width: '23%',
    height: '90.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 100,
  },
  equalButton: {
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: 'dimgray',
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
  },
});
