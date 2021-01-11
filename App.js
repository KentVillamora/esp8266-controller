import React from 'react';
import {View, StyleSheet} from 'react-native';

const Circle = () => {
  return <View style={styles.circle} />;
}

export default Circle;

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    backgroundColor: "white",
    borderColor: "red",
  },
});
