import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from '../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          <Text>プロフィール編集画面</Text>
    </View>
  );
}

//ここでナビゲーションバーを設定
HomeScreen.navigationOptions = {
  title:'プロフィール編集'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});