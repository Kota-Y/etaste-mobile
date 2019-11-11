import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

import EditProfileScreen from '../screens/EditProfileScreen';

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
    title: '大会について',
    id: 10
  }
]

export default class SettingsScreen extends React.Component {

  /* push = (to) => {
    const { navigation } = this.props
    navigation.navigate(to)
  } */

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
                onPress={() => this.props.navigation.navigate('editProfile')}
              />
          )}
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});