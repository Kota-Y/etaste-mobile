import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SettingsScreen from './SettingsScreen';
import EditProfileScreen from './EditProfileScreen';

const RootStack = createStackNavigator(
    {
      Setting: {
        screen: SettingsScreen,
      },
      EditProfile: {
        screen: EditProfileScreen,
      },
    },
    {
      initialRouteName: 'Setting',
    }
  );
  
  export default class SettingRoot extends React.Component {
    render() {
      return <RootStack />;
    }
  }