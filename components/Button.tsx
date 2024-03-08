/* eslint-disable prettier/prettier */

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
export interface ButtonProps {
  value: string;
  onPress?: () => void;
  isBackspaceButton?: boolean;
  isEqualButton?: boolean;
}

export const Button = ({
  value,
  onPress,
  isBackspaceButton,
  isEqualButton,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        isEqualButton
          ? {...styles.common, ...styles.equalButton}
          : {...styles.common, ...styles.button}
      }>
      {isBackspaceButton ? (
        <Icon name="rocket" size={30} color="#900" />
      ) : (
        //<Icon name="backspace-outline" size={100} color="red" />
        <Text style={styles.buttonText}>{value}</Text>
      )}
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
