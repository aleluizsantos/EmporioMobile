import React from 'react';
import {View, Image, Text} from 'react-native';

import ImgMesa from '../../../assets/mesa.png';
import ImgMesaRed from '../../../assets/mesaRed.png';
import styles from './styles';

const Mesa = ({mesa: {id, busy, numberMesa}}) => (
  <View style={styles.container}>
    <Image source={busy ? ImgMesaRed : ImgMesa} style={styles.image} />
    <Text style={styles.textBag}>{id}</Text>
    <View>{busy && <Text>01:01:00</Text>}</View>
  </View>
);

export default Mesa;
