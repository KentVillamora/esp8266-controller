import React from 'react';
import {View, StyleSheet} from 'react-native';

const SteerWheel = () => {
  return (
    <View>
      <View style={styles.handRing}/>
      <View style={styles.handSpoke}/>
    </View>
  );
}

export default SteerWheel;

const styles = StyleSheet.create({
  handRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    backgroundColor: "white",
    borderColor: "red",
  },
  handSpoke: {
    width: 100,
    height: 20,
    backgroundColor: "red",
    position: "absolute",
    left: 0,
    top: 40,
  },
});
