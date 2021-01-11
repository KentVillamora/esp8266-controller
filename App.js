import React from 'react';
import {View, StyleSheet} from 'react-native';

const Infinity = () => {
  return (
    <View style={styles.infinity}>
      <View style={styles.infinityBefore} />
      <View style={styles.infinityAfter} />
    </View>
  );
};

export default Infinity;

StyleSheet.create({
  infinity: {
    width: 80,
    height: 100,
  },
  infinityBefore: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderWidth: 20,
    borderColor: "red",
    borderStyle: "solid",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 0,
    transform: [{ rotate: "-135deg" }],
  },
  infinityAfter: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderWidth: 20,
    borderColor: "red",
    borderStyle: "solid",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{ rotate: "-135deg" }],
  },
});
