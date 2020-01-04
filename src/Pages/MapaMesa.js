import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ListMesa from '../Components/ListMesa';
import {colors} from '../styles';

export default function MapaMesa({navigation}) {
  return (
    <View style={styles.container}>
      <ListMesa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
});
