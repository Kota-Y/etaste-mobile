import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from '../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          <Text>Hello ETASTE!!</Text>
          <Text>This is Home-Screen.</Text>
    </View>
  );
}

//ここでナビゲーションバーを設定
HomeScreen.navigationOptions = {
  title:'ホーム',
  headerRight: <Icon name="human-child" 
                     size={40} 
                     color={Colors.etasteColor}     
                />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});