import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../styles';

import ListProduct from '../Components/ListProduct';

export default function Cardapio({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListProduct />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.darker,
  },
});
