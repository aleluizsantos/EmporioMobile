import React from 'react';
import {View, Image, Text} from 'react-native';

import ImgMesa from '../../../assets/mesa.png';
import ImgMesaRed from '../../../assets/mesaGroup.png';
import styles from './styles';

const Mesa = ({mesa: {_id, busy, numberPlace, numberTable}}) => (
  <View style={styles.container}>
    <Image source={busy ? ImgMesaRed : ImgMesa} style={styles.image} />
    <View style={styles.containerBag}>
      <Text style={styles.textBag}>{numberTable}</Text>
      <Text style={styles.textBag}>X</Text>
    </View>
    <View>
      <Text>{numberPlace}</Text>
    </View>
  </View>
);

export default Mesa;
