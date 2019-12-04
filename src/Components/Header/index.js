// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import styles from './styles';

// export default ( { navigation } ) => (
//     <View style={styles.container} > 
//         <Icon name='ios-arrow-back' size={24} style={styles.icon} />
//         <Text style={styles.title}>Profile</Text>
//         <TouchableOpacity onPress={()=>{ navigation.navigate('Login') }}>
//             <Icon name='ios-more' size={24} style={styles.icon} />
//         </TouchableOpacity>
//     </View>
// );


import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Text,
    View,
    TouchableOpacity,
 } from 'react-native';

 import styles from './styles';

 function Header( { navigation } ) {

    function handleOffline(){
        AsyncStorage.removeItem('@user_id');
        navigation.navigate('Splash');
    }

    return (
        <View style={styles.container} > 
            {/* <Icon name='ios-add-circle-outline' size={24} style={styles.icon} /> */}
            <Text style={styles.title}>Emporio da Carne</Text>
            <TouchableOpacity onPress={()=> handleOffline() }>
            <Icon name='ios-more' size={24} style={styles.icon} />
            </TouchableOpacity>
        </View>

    );
 }

 export default withNavigation(Header);


