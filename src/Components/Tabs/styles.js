import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.tabBarHeight,
    borderTopWidth: 3,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    color: colors.light,
  },
  active: {
    color: colors.primary,
  },
  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
  },
  mainIcon: {
    color: colors.white,
  },
});

export default styles;
