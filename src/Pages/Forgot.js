import React, { useState } from 'react';

import { 
    Platform,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView,
    Image,
    TextInput,
    Alert,
    ActivityIndicator,
} from 'react-native';

import { colors, fonts, metrics } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import logo from  '../assets/logo.png';
import api from '../Services/api';

export default function Forgot( { navigation } ) {
    
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit() {
        if(!isLoading){
            if(email === ''){
                Alert.alert('Campo obrigatório', "Preencha com um email valido.");
            }else{
                try {
                    setIsLoading(true);
                    //Realizar a requisição via post 
                    const response = api.post('/auth/forgot-password', {
                        email,
                    })

                    Alert.alert('Recuperação Senha', 'E-mail enviado com sucesso, verifique sua caixa de mensagem.');

                    setIsLoading(false);

                    navigation.navigate('Login');

                } catch (error) {
                    Alert.alert('Falha no envio', 'Algo de errado aconteceu, tente novamente.')
                }
            }
        }
    }

    return (
        <KeyboardAvoidingView 
            enabled={Platform.OS == 'ios'}
            behavior='padding'
            style={styles.container}> 

            <View style={styles.form}>
                {/* <StatusBar translucent backgroundColor={colors.darker} /> */}
                
                <Image source={logo} style={styles.logo} />

                <Text style={styles.label}>
                Você esqueceu sua senha, informe seu e-mail que nós enviaremos uma mensagem com um 
                link para você criar uma nova senha!</Text>

                <Text style={styles.label}>Digite seu E-mail *</Text>
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
                    />
                </View>
                                
                {isLoading && <ActivityIndicator style={styles.isLoading} size='large' color={colors.primary} /> }

                {!isLoading && 
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                }
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
});