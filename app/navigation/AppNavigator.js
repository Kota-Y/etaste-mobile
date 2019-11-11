import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import EditProfileScreen from '../screens/EditProfileScreen';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator
  }),
  /* createStackNavigator({
    editProfile: EditProfileScreen
  }) */
);
