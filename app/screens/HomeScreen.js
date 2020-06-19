import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Hello ETASTE!!</Text>
        <Text>This is Home-Screen.</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Icon name="human-child" 
                size={40} 
                color={Colors.etasteColor}/>
        </TouchableOpacity>
      </View>
    );
  }
}

//ここでナビゲーションバーを設定
HomeScreen.navigationOptions = {
  title:'ホーム',
  headerRight:  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Icon name="human-child" 
                        size={40} 
                        color={Colors.etasteColor}/>
                </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});