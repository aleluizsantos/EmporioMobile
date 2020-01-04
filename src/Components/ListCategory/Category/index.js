import React from 'react';

import {View, Image, Text} from 'react-native';

import styles from './styles';

const Category = ({category: {image, title}}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Category;
