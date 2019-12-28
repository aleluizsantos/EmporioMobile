import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './Pages/Splash';
import Login from './Pages/Login';
import Workspace from './Pages/Workspace';
import Forgot from './Pages/Forgot';
import Account from './Pages/Account';
import Cardapio from './Pages/Cardapio';
import MapaMesa from './Pages/MapaMesa';

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Forgot: {
    screen: Forgot,
    navigationOptions: {
      header: null,
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
    },
  },
});

const NavWorkspace = createStackNavigator({
  Workspace: {
    screen: Workspace,
    navigationOptions: {
      header: null,
    },
  },
  Cardapio: {
    screen: Cardapio,
    navigationOptions: {
      header: null,
    },
  },
  MapaMesa: {
    screen: MapaMesa,
    navigationOptions: {
      header: null,
    },
  },
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Splash: {screen: Splash},
    Login: {screen: MainNavigator},
    Workspace: {screen: NavWorkspace},
  }),
);

export default Routes;
