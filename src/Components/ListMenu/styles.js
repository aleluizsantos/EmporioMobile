import {StyleSheet} from 'react-native';
import {metrics} from '../../styles/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerImage: {
    padding: metrics.padding,
  },
  logoImage: {
    height: 100,
    width: 150,
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: metrics.padding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
