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
    borderWidth: 10,
    borderColor: "black",
  },
  handSpoke: {
    width: 100,
    height: 20,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    top: 40,
  },
});
