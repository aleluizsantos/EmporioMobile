import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import mapaMesa from '../../assets/icoMmapaMesa.jpg';
import cardapio from '../../assets/icoMcardapio.png';
import pedido from '../../assets/icoMPedido.jpg';
import fechaConta from '../../assets/icoMconta.jpg';
import Menu from './Menu';

function ListMenu({navigation}) {
  function handleCardapio() {
    navigation.navigate('Cardapio');
  }
  function handleMapaMesa() {
    navigation.navigate('MapaMesa');
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity>
          <Menu name="Pedido" cardapio={pedido} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMapaMesa}>
          <Menu name="Mapa Mesa" cardapio={mapaMesa} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu name="Encerrar Conta" cardapio={fechaConta} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCardapio}>
          <Menu name="Cardápio" cardapio={cardapio} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withNavigation(ListMenu);
