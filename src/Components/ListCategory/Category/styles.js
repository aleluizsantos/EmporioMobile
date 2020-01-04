import {StyleSheet, Dimensions} from 'react-native';

import {metrics, colors, fonts} from '../../../styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    width: (width - 45) / 2,
  },
  imageContainer: {
    // padding: metrics.padding,
  },
  infoContainer: {
    borderTopWidth: 2,
    borderColor: colors.light,
    padding: metrics.padding,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    resizeMode: 'stretch',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.primary,
  },
});

export default styles;
