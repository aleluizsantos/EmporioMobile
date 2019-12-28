import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Menu = ({name, cardapio}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={cardapio} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{name}</Text>
    </View>
  </View>
);

export default Menu;
