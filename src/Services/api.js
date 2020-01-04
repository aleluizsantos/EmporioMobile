import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  //baseURL: 'http://192.168.0.7:3000/',
  baseURL: 'https://emporiodacarne.herokuapp.com',
});

// Add a request interceptor
// enviando a toda requisição o token
api.interceptors.request.use(
  async function(config) {
    // Capturar o token salvo no dispositivo
    await AsyncStorage.getItem('@token').then(tokenUser => {
      if (tokenUser) {
        // Definir o token no Header Authorization em toda requisição
        config.headers.Authorization = `Bearer ${tokenUser}`;
      }
    });
    return config;
  },
  function(error) {
    // enviar o erro de solicitação
    return Promise.reject(error);
  },
);

export default api;
