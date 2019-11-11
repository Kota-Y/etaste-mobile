import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

/* import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen'; */
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(

  /* createStackNavigator({
    Setting: SettingsScreen,
    Edit: EditProfileScreen
  }), */

  createSwitchNavigator({
    Main: MainTabNavigator,
  })
  
);

/* const router = createStackNavigator({
  list: SettingsScreen,
  edit: EditProfileScreen
},
{
  mode: 'card',
}) */
