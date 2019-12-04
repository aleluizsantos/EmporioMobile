import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://image.shutterstock.com/image-photo/shish-kebab-mushrooms-cherry-tomato-600w-1347040721.jpg',
        title: 'Espeto',
        description: 'Carne de vaca, tomate e cebola',
        price: 'R$5,00',
      },
      {
        id: 2,
        image: 'https://image.shutterstock.com/image-photo/orange-juice-glass-oranges-slices-600w-1541060588.jpg',
        title: 'Suco de Laranja',
        description: 'Suco de laranja natural garrafa 500ml',
        price: 'R$7,00',
      },
      {
        id: 3,
        image: 'https://image.shutterstock.com/image-photo/minsk-belarusaugust-26-2016-glass-600w-532172488.jpg',
        title: 'Coca Cola',
        description: 'Lata 350ml',
        price: 'R$5,00',
      },
      {
        id: 4,
        image: 'https://image.shutterstock.com/image-photo/brasilia-federal-district-brazil-circa-600w-1557139859.jpg',
        title: 'Cerveja Skow',
        description: 'Lata de 350 ml',
        price: 'R$8,00',
      },
      {
        id: 5,
        image: 'https://image.shutterstock.com/image-photo/waiter-serving-shish-kebab-tomato-600w-406655872.jpg',
        title: 'Porções',
        description: 'Porçoes',
        price: 'R$30,00',
      },
      {
        id: 6,
        image: 'https://image.shutterstock.com/image-photo/selection-healthy-food-heart-life-600w-554489488.jpg',
        title: 'Suco',
        description: 'Suco verde',
        price: 'R$10,00',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.products.map(product => 
            <Product key={product.id} product={product} />
        )}
      </View>
    );
  }
}
