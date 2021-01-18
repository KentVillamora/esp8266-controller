//On touch, draw a circle where the touch was detected

import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.steerArea}>
        <View style={styles.steerWheel} />
        <Animated.View style={pan.getLayout()} {...panResponder.panHandlers}>
          <View style={styles.touchIndicator} />
        </Animated.View>
      </View>
      <Text style={styles.paragraph}>Steer Wheel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  paragraph: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  steerArea: {
    height: 300,
    width: 300,
    backgroundColor: 'lightgray',
  },
  steerWheel: {
    height: 240,
    width: 240,
    borderRadius: 120,
    borderWidth: 20,
    top: 30,
    left: 30,
    borderColor: 'gray',
  },
  touchIndicator: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    top: 0,
    left: 130,
  },
  touchArea: {
    height: 100,
    width: 100,
    borderWidth: 10,
  },
});
