/* eslint-disable prettier/prettier */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export interface ButtonProps {
  value: number;
  onPress: () => void;
  isEqualButton?: boolean;
}

export const Button = ({value, onPress, isEqualButton}: ButtonProps) => {
  return (
    <View style={isEqualButton ? styles.equalButton : styles.button}>
      <Text onPress={onPress} style={styles.buttonText}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
  },
  equalButton: {
    backgroundColor: 'orangered',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});
