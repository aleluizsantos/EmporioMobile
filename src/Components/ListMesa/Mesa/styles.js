import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    margin: 10,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  textBag: {
    height: 25,
    width: 25,
    backgroundColor: colors.primary,
    borderRadius: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    padding: 2,
    right: -10,
    top: -10,
  },
});

export default styles;
