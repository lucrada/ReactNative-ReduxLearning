/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reducers/counter/countSlice';

function App(): React.JSX.Element {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
      <View style={styles.mainContainer}>
        <Text style={styles.countText}>{count}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: Dimensions.get('window').width * 0.5}}>
          <Button title="Add" onPress={() => {dispatch(increment(10))}} />
          <Button title="Reduce" onPress={() => {dispatch(decrement(5))}} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontWeight: 'bold',
    fontSize: 62,
    marginBottom: 50,
  },
});

export default App;
