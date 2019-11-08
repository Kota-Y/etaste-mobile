import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/* Home on Tabbar */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'ios-home'
        /* Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle' */
      }
    />
  ),
};

HomeStack.path = '';

/* Favorite on Tabbar */
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Favorite',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}
      name={'ios-heart'} />
  ),
};

LinksStack.path = '';

/* Deal on Tabbar */
const DealStack = createStackNavigator(
  {
    Deal: LinksScreen,
  },
  config
);

DealStack.navigationOptions = {
  tabBarLabel: 'Deal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-list-box'} />
  ),
};

DealStack.path = '';

/* Setting on Tabbar */
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-settings'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  DealStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
