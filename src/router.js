import React from  'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { Platform, StatusBar } from "react-native";

import Splash from './Pages/Splash';
import Login from './Pages/Login';
import Workspace from './Pages/Workspace';
import Forgot from './Pages/Forgot';
import Account from './Pages/Account';


const MainNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Forgot: {
        screen: Forgot,
        navigationOptions: {
            title: 'Recuperar senha',
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            header: null,
        }
    }
  });

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Splash: { screen: Splash },
            Login: { screen: MainNavigator },
            Workspace: { screen: Workspace}
        }
    )
);

export default Routes;