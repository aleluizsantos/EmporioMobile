import React from 'react';

import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default function Workspace( { navigation } ) {

    function handleOffline() {
        AsyncStorage.clear();
        navigation.navigate('Splash')
    }

    return (
        <View>
            <Text>Workspace</Text>
            <TouchableOpacity onPress={handleOffline}>
                <Text>offline</Text>
            </TouchableOpacity>
        </View>
    );
}


