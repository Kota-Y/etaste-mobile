import React from "react";
//import { Actions } from "react-native-router-flux";
import {
  View,
  StyleSheet,
} from "react-native";

import Colors from '../constants/Colors';
import Icon from '../components/lv1/Icon';

export default props => {
    const { user } = props;

    return(
        <View style={styles.iconWrapper}>
          <Icon
            style={styles.icon}
            size={height * 0.04}
            name="flower-tulip"
            color={Colors.etasteColor}
          />
        </View>
    );

};

const styles = StyleSheet.create({
    iconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: width * 0.02
    },
    icon: {
        marginRight: width * 0.01
    }
});