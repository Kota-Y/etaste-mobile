import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import EditProfileScreen from './EditProfileScreen';

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

export default class SettingList extends React.Component {

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
                onPress={() => this.props.navigation.navigate('Edit')}
              />
          )}
        />
      </View>
    );
  }

}

SettingList.navigationOptions = {
  title:'設定'
}

/* const RootStack = createStackNavigator(
  {
    setting: SettingsScreen,
    edit: EditProfileScreen,
  },
  {
    mode: 'card'
  }
);

const AppContainer = createAppContainer(RootStack);


export default class SettingStack extends React.Component {
  render() {
    return <AppContainer />;
  }
} */