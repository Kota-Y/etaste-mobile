import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Colors from '../constants/Colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
          <Text>Login画面です</Text>
    </View>
  );
}

//ここでナビゲーションバーを設定
LoginScreen.navigationOptions = {
  title:'ログイン',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});