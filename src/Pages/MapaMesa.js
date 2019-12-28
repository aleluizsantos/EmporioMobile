import React from 'react';
import {View, StyleSheet} from 'react-native';

import ListMesa from '../Components/ListMesa';
import {colors} from '../styles';

export default function MapaMesa() {
  return (
    <View style={styles.container}>
      <ListMesa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darker,
    justifyContent: 'space-between',
  },
});
