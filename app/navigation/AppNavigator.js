import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(

  createSwitchNavigator({
    Main: MainTabNavigator,
  })
  
);
