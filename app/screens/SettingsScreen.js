import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SettingList from '../components/SettingList';
import EditProfileScreen from '../screens/EditProfileScreen';

export default class SettingsScreen extends React.Component {

  push = (to) => {
    const { navigation } = this.props
    navigation.navigate(to)
  }

  render(){

    const Layout = createAppContainer(SettingStack);

    return(
      <Layout/>
    );
  }

}

SettingsScreen.navigationOptions = {
  title: '設定',
};

const SettingStack = createStackNavigator(
  {
    list: SettingList,
    editProfile: EditProfileScreen,
  },
  {
    initialRouteName: 'list'
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});