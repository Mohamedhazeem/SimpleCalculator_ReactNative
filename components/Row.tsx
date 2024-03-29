/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonProps, Button} from './Button';

interface RowProps {
  buttons: ButtonProps[];
}

const Row = ({buttons}: RowProps) => {
  return (
    <View style={styles.row}>
      {buttons.map(button => (
        <Button
          key={button.value}
          value={button.value}
          onPress={button.onPress}
          isBackscapeButton={button.isBackscapeButton}
          isEqualButton={button.isEqualButton}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: 18,
  },
});

export default Row;
