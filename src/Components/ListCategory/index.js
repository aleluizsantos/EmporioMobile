import React, {Component} from 'react';

import {View, TouchableOpacity} from 'react-native';
import Category from './Category';

import styles from './styles';

export default class ListCategory extends Component {
  state = {
    Categorys: [
      {
        id: 1,
        image:
          'https://www.vivaespetos.com.br/wp-content/uploads/2019/06/Copa-Lombo.jpg',
        title: 'Bebida',
      },
      {
        id: 2,
        image:
          'https://www.vivaespetos.com.br/wp-content/uploads/2019/05/coracao.jpg',
        title: 'Espeto',
      },
      {
        id: 3,
        image:
          'https://www.vivaespetos.com.br/wp-content/uploads/2019/06/Copa-Lombo.jpg',
        title: 'Lanche',
      },
      {
        id: 4,
        image:
          'https://www.vivaespetos.com.br/wp-content/uploads/2019/06/Copa-Lombo.jpg',
        title: 'Porções',
      },
      {
        id: 5,
        image:
          'https://www.vivaespetos.com.br/wp-content/uploads/2019/06/Copa-Lombo.jpg',
        title: 'Salada',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.Categorys.map(category => (
          <TouchableOpacity>
            <Category key={category.id} category={category} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
