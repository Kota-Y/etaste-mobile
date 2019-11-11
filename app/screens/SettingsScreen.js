import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import EditProfileScreen from './EditProfileScreen';

const list = [
  {
    title: 'プロフィール編集',
    id: 1
  },
  {
    title: 'Q&A', 
    id: 2
  },
  {
    title: 'お問い合わせ',
    id: 3
  },
  {
    title: 'オープンソース',
    id: 4
  },
  {
    title: '利用規約',
    id: 5
  },
  {
    title: '特定商品取引法',
    id: 6
  },
  {
    title: 'プライバシーポリシー',
    id: 7
  },
  {
    title: 'バージョン情報',
    id: 8
  },
  {
    title: 'ログアウト',
    id: 9
  },
  {
    title: '退会について',
    id: 10
  }
]

class SettingsScreen extends React.Component {

  render(){

    return(
      <View>
        {/* 一覧表示 */}
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <ListItem
                title={item.title}
                bottomDivider
                chevron
                onPress={() => this.props.navigation.navigate('edit')}
              />
          )}
        />
      </View>
    );
  }

}

/* SettingsScreen.navigationOptions = {
  title:'設定'
} */

export default createStackNavigator(
  {
    setting: {
      screen : SettingsScreen, 
      navigationOptions: {
        title: '設定',
        header: null}},
    edit: {
      screen: EditProfileScreen, 
      navigationOptions: {
        title: '編集',
        header: null}}
  },
  {
    mode: 'card'
  }
)
/*
const AppContainer = createAppContainer(RootStack);


export default class SettingStack extends React.Component {
  render() {
    return <AppContainer />;
  }
} */