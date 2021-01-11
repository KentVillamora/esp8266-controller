import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import  {PanGestureHandler} from 'react-native-gesture-handler'

export default class RnGestureHandler extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={[styles.circle]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      flexDirection: "column",
      backgroundColor: "#fff"
    },

    circle: {
        width: 150,
        height: 150,
        backgroundColor: "#c00000",
        borderRadius: 100
      },
  
   })
