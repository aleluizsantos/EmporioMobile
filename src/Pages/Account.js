import React, {useState} from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {colors, fonts} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../assets/logo.png';
import api from '../Services/api';

export default function Account({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSecureText, setIsSecureText] = useState(true);

  async function handleSubmit() {
    if (!isLoading) {
      if (name === '' || email === '' || password === '') {
        Alert.alert('Campo obrigatório', 'Preencha os campos obrigatórios.');
      } else {
        try {
          setIsLoading(true);

          api.post('/auth/register', {
            name,
            email,
            password,
          });

          setIsLoading(false);

          Alert.alert('Sucesso', 'Conta criada com sucesso!');

          navigation.navigate('Login');
        } catch (error) {
          Alert.alert(
            'Falha novo usuário',
            'Ocorreu um erro na criação do usuário, tente novamente',
          );
        }
      }
    }
  }

  function handleEve() {
    setIsSecureText(!isSecureText);
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == 'ios'}
      behavior="padding"
      style={styles.container}>
      <View style={styles.form}>
        {/* <StatusBar translucent backgroundColor={colors.darker} /> */}

        <Image source={logo} style={styles.logo} />

        <Text style={styles.label}>
          Preencha os campos para criar um usuário, que será desbloqueado pelo
          administrador.
        </Text>

        <Text style={styles.label}>Nome *</Text>
        <View>
          <Icon name="user-o" size={24} style={styles.IconInput} />
          <TextInput
            style={styles.input}
            placeholder="seu nome"
            placeholderTextColor={colors.dark}
            keyboardType="default"
            value={name}
            onChangeText={setName}
          />
        </View>
        <Text style={styles.label}>E-mail *</Text>
        <View>
          <Icon name="envelope-o" size={24} style={styles.IconInput} />
          <TextInput
            style={styles.input}
            placeholder="seu e-mail"
            placeholderTextColor={colors.dark}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.label}>Password *</Text>
        <View>
          <TouchableOpacity style={styles.Touchable} onPress={handleEve}>
            <Icon
              name={isSecureText ? 'eye-slash' : 'eye'}
              size={24}
              style={styles.IconInput}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor={colors.dark}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isSecureText}
          />
        </View>

        {isLoading && (
          <ActivityIndicator
            style={styles.isLoading}
            size="large"
            color={colors.primary}
          />
        )}

        {!isLoading && (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.textButton}>Criar</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darker,
  },
  logo: {
    height: 90,
    width: 120,
    alignSelf: 'center',
  },
  label: {
    color: colors.light,
    fontSize: fonts.regular,
    paddingTop: 20,
  },
  IconInput: {
    position: 'absolute',
    right: 10,
    top: 6,
    color: colors.light,
    zIndex: 1,
  },
  input: {
    paddingHorizontal: 15,
    height: 40,
    fontSize: fonts.big,
    color: colors.light,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  button: {
    marginTop: 20,
    height: 42,
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.dark,
    padding: 4,
  },
  form: {
    width: '80%',
  },
  isLoading: {
    marginTop: 10,
  },
  Touchable: {
    position: 'absolute',
    right: 1,
    top: 4,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 30,
    zIndex: 1,
  },
});
