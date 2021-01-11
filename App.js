import React from 'react';
import {View, StyleSheet} from 'react-native';

const SteerWheel = () => {
  return (
    <View style={styles.handRing} />
    <View style={styles.handSpoke} />
  );
}

export default Circle;

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
    height: 30,
    backgroundColor: "red",
    position: "absolute",
    right: 0,
    top: 50,
  },
});
