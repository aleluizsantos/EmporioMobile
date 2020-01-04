import {StyleSheet} from 'react-native';
import {colors} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    margin: 10,
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  containerBag: {
    flexDirection: 'row',
    // position: 'absolute',
    padding: 2,
    // right: -10,
    // top: -10,
  },
  textBag: {
    height: 25,
    width: 25,
    backgroundColor: colors.primary,
    borderRadius: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
