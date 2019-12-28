import React, {Component} from 'react';
import {View} from 'react-native';

import Mesa from '../ListMesa/Mesa';
import styles from './styles';

export default class ListMesa extends Component {
  state = {
    Mesas: [
      {
        id: 1,
        busy: false,
        numberPlace: 4,
      },
      {
        id: 2,
        busy: true,
        numberPlace: 4,
      },
      {
        id: 3,
        busy: false,
        numberPlace: 4,
      },
      {
        id: 4,
        busy: false,
        numberPlace: 4,
      },
      {
        id: 5,
        busy: true,
        numberPlace: 4,
      },
      {
        id: 6,
        busy: false,
        numberPlace: 4,
      },
      {
        id: 7,
        busy: false,
        numberPlace: 4,
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.Mesas.map(mesa => (
          <Mesa key={mesa.id} mesa={mesa} />
        ))}
      </View>
    );
  }
}
