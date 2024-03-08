/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
export interface ButtonProps {
  value: string;
  onPress?: () => void;
  isBackscapeButton?: boolean;
  isEqualButton?: boolean;
}

export const Button = ({
  value,
  onPress,
  isBackscapeButton,
  isEqualButton,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        isEqualButton
          ? {...styles.common, ...styles.equalButton}
          : isBackscapeButton
          ? {...styles.common, ...styles.clearButton}
          : {...styles.common, ...styles.button}
      }>
      {isBackscapeButton ? (
        <Image
          source={require('./delete.png')}
          style={styles.backspaceButton}
        />
      ) : (
        <Text style={styles.buttonText}>{value}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  common: {
    width: '18%',
    height: '72%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  equalButton: {
    backgroundColor: '#ffc107',
  },
  clearButton: {
    backgroundColor: 'orangered',
  },

  button: {
    backgroundColor: '#474747',
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
  },
  backspaceButton: {
    width: 40,
    height: 40,
  },
});
