import React from 'react';

import {StyleSheet, View, ScrollView} from 'react-native';
import {colors} from '../styles';

import Header from '../Components/Header';
import ListMenu from '../Components/ListMenu';
// import ListProduct from '../Components/ListProduct';

export default function Workspace({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ListMenu />
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
