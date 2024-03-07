/* eslint-disable prettier/prettier */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export interface ButtonProps {
  value: string;
  onPress: () => void;
  isEqualButton?: boolean;
}

export const Button = ({value, onPress, isEqualButton}: ButtonProps) => {
  return (
    <View
      style={
        isEqualButton
          ? {...styles.common, ...styles.equalButton}
          : {...styles.common, ...styles.button}
      }>
      <Text onPress={onPress} style={styles.buttonText}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  common: {
    width: '23.5%',
    height: '98.5%',
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
