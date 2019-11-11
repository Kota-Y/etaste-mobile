import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  
  return(
    <View style={styles.container}>
      <Text>ああああ</Text>
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