import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import splash from '../assets/splash.png';

const {height, width} = Dimensions.get('window');

export default function Splash({navigation}) {
  setTimeout(function() {
    navigation.navigate('Login');
  }, 1500);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={splash} style={styles.logo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: width,
    height: height,
  },
});
