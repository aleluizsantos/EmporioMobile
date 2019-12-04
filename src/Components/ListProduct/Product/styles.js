import { StyleSheet, Dimensions } from 'react-native';

import { metrics, colors, fonts } from '../../../styles';


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 3,
        marginBottom: metrics.padding,
        shadowColor: colors.light,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: { x:0, y: 0},
        width: (width - 45) / 2,
    },
    checkIcon: {
        position: 'absolute',
        right: metrics.padding,
        top: metrics.padding,
        color: colors.light,
        zIndex: 1,
        // position: 'absolute',
        // alignSelf: 'center',
        // zIndex: 1,
        // bottom: '-15%',
        // color: colors.primary,
    },
    imageContainer: {
        padding: metrics.padding,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },  
    infoContainer: {
        borderTopWidth: 1,
        borderColor: colors.lighter,
        padding: metrics.padding,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.darker,
    },
    description: {
        textAlign: 'center',
        color: colors.dark,
        fontSize: fonts.smaller,
    },
    price: {
        textAlign: 'center',
        color: colors.light,
        fontSize: fonts.regular,
        marginTop: 5,
    },
});

export default styles;