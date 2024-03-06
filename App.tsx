/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Row from './components/Row';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Row
          buttons={[
            {value: 7, onPress: () => {}},
            {value: 8, onPress: () => {}},
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
