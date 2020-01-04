import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';

import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

import Mesa from '../ListMesa/Mesa';
import api from '../../Services/api';
// ---------------------------------------------------------------------------
// Função que retorna um lista de Mesas
// ---------------------------------------------------------------------------
function ListMesa() {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    //Carregar todos os Sports passando o parametro 'tech'
    async function loadMesa() {
      // Faça uma consulta via api retornando as mesas cadastradas
      const response = await api.get('/mesa');
      // Set as mesas da variavel
      setMesas(response.data);
    }
    //iniciar a função
    loadMesa();
  }, []);

  return (
    <View style={styles.container}>
      {mesas.map(m => (
        <TouchableOpacity key={m._id}>
          <Mesa key={m._id} mesa={m} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
// withNavigation - é um componente de ordem superior que passa o suporte
// de navegação para um componente agrupado. É útil quando você
// não pode passar o suporte de navegação diretamente para o componente ou
// não deseja passá-lo no caso de um filho profundamente aninhado.
export default withNavigation(ListMesa);
