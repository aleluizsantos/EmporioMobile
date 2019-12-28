import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

function Header({navigation}) {
  function handleOffline() {
    AsyncStorage.removeItem('@user_id');
    AsyncStorage.removeItem('@token');
    navigation.navigate('Splash');
  }

  return (
    <View style={styles.container}>
      {/* <Icon name='ios-add-circle-outline' size={24} style={styles.icon} /> */}
      <Text style={styles.title}>Emporio da Carne</Text>
      <TouchableOpacity onPress={() => handleOffline()}>
        <Icon name="md-more" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default withNavigation(Header);
