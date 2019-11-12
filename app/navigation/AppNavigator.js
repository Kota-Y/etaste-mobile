import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Icon from '../components/lv1/Icon';
import LoginScreen from '../screens/LoginScreen';

export default createAppContainer(

  createSwitchNavigator({
    Main: MainTabNavigator,
    //Icon: Icon,
    //Login: LoginScreen
  })
  
);
