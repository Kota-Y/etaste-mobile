import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          <Text>Hello ETASTE!!</Text>
          <Text>This is Home-Screen.</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title:'ホーム'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    margin: 30
  }
});