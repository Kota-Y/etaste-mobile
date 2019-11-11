import React from 'react';
import { View, StyleSheet, Alert, TouchableHighlightComponent } from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
//import AppNavigator from '../navigation/AppNavigator';

export default function SettingsScreen() {

  const list = [
    {
      title: 'プロフィール編集'
    },
    {
      title: 'Q&A'
    },
    {
      title: 'お問い合わせ'
    },
    {
      title: 'オープンソース'
    },
    {
      title: '利用規約'
    },
    {
      title: '特定商品取引法'
    },
    {
      title: 'プライバシーポリシー'
    },
    {
      title: 'バージョン情報'
    },
    {
      title: 'ログアウト'
    },
    {
      title: '大会について'
    }
  ]

  //const {navigate} = this.props.navigation;

  return(
    <View>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            bottomDivider
            chevron
            //onPress={Actions.HomeScreen}
          />
        ))
      }
    </View>
  );

}

SettingsScreen.navigationOptions = {
  title: '設定',
};

const SettingNavigator = createStackNavigator({
  Home: {screen: HomeScreen}
});

const SetNav = createAppContainer(SettingNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});