import React, { useState, useEffect } from 'react';
import { 
    Platform,
    View, 
    KeyboardAvoidingView, 
    Text, 
    Image, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Keyboard,
    StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import { colors, fonts, metrics } from '../styles';
import logo from  '../assets/logo.png';
import api from '../Services/api';



export default function Login( { navigation } ) {

    // Definir o estado da aplicação
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // -------------------------------------------------------------------
    // Funções
    // -------------------------------------------------------------------
    useEffect(() => {
        AsyncStorage.getItem('@user_id').then(user => {
            if(user)
                navigation.navigate('Workspace');
        })
    },[])

    async function handleSubmit(){
        if(!isLoading){
            try {
                // Verificar se o usuário preencheu o email e a tecnologia
                if(email === '' || password === '') {
                    Alert.alert('Falha no Login!', 'Verificar campos obrigatórios');
                }else{

                    setIsLoading(true);

                    const response = await api.post('/auth/authenticate', {
                        email,
                        password
                    })
    
                    const { user, token } = response.data;
    
                    await AsyncStorage.setItem('@user_id', user._id);
                    await AsyncStorage.setItem('@token', token);

                    setIsLoading(false);

                    navigation.navigate('Workspace');
                }
            } catch (error) {
                Alert.alert('Falha na Autenticação','E-mail ou password inválido.')
                setIsLoading(false);
                console.log( error );
            }        
        }

    }
    function handleForgot() {
        navigation.navigate('Forgot');
    };

    function handleAccount() {
        navigation.navigate('Account');
    };
    // -------------------------------------------------------------------

    return (
            <KeyboardAvoidingView 
                enabled={Platform.OS == 'ios'}
                behavior='padding'
                style={styles.container}>
                <View style={styles.form}>
                <StatusBar translucent backgroundColor={colors.darker} />
                    <Image source={logo} style={styles.logo} />

                    <Text style={styles.label}>Seu E-mail *</Text>
                    <View>
                        <Icon name='user-o' size={24} style={styles.IconInput} />
                        <TextInput
                            style={styles.input}
                            placeholder='seu e-mail'
                            placeholderTextColor={colors.dark}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            value={email}
                            onChangeText={setEmail}
                            returnKeyType='next'
                            // onSubmitEditing={()=> this.passwordInput.focus()}
                        />
                    </View>
                    <Text style={styles.label}>Passowrd *</Text>
                    <View>
                        <Icon name='lock' size={24} style={styles.IconInput} />
                        <TextInput
                            // ref={input => this.passwordInput = input}
                            style={styles.input}
                            placeholder='password'
                            placeholderTextColor={colors.dark}
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            returnKeyType='go'
                            onSubmitEditing={Keyboard.dismiss}
                        />
                    </View>

                    {isLoading && <ActivityIndicator style={styles.isLoading} size='large' color={colors.primary} /> }

                    {!isLoading && 
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    }
                    
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={handleForgot}>
                            <Text style={styles.textButton}>Esqueci minha Senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAccount}>
                            <Text style={styles.textButton}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
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
        height: 150,
        width: 220,
        alignSelf: 'center',
    },
    label: {
        color: colors.light,
        fontSize: fonts.smaller,
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
    menu: {
        marginTop: 10,
        padding: 10,
    },
    isLoading: {
        marginTop: 10,
    },
});