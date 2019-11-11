import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';

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
  
  return(
    <View>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            bottomDivider
            chevron
            onPress={() => {Alert.alert('ボタンを押しました！')}}
          />
        ))
      }
    </View>
  );

}

SettingsScreen.navigationOptions = {
  title: '設定',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});