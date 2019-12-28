import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, metrics} from '../../../styles';

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
    width: (width - 70) / 2, //definir a largura de cada caixa e definindo a quantidade por linha
  },
  imageContainer: {
    height: 100,
  },
  infoContainer: {
    padding: metrics.padding,
  },
  image: {
    width: '100%',
    height: 100,
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
