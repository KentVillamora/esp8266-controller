import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const MyComponent = () => {
  const [borderColor, setBorderColor] = useState('white');

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setBorderColor('lightblue');
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        setBorderColor('white');
      },
    })
  ).current;

  return (
    <View style={MyStyle.mainView}>
      <View style={MyStyle.steerArea}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            {
              height: 100,
              width: 100,
              backgroundColor: 'gray',
              borderWidth: 10,
              borderColor: borderColor,
              borderRadius: 50,
              top: pan.y,
              left: pan.x,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default MyComponent;

const MyStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'lightpink',
  },
  steerArea: {
    height: 200,
    width: 200,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    left: 50,
  },
});
