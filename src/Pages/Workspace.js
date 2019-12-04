import React from 'react';

import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { colors } from '../styles';

import Header from '../Components/Header';
import Tabs from '../Components/Tabs';
import ListProduct from '../Components/ListProduct';


export default function Workspace( { navigation } ) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <ListProduct />
            </ScrollView>
            <Tabs />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.darker,
    },  
});


