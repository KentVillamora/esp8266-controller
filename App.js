import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated, Pressable} from 'react-native';

const App = () => {
  const value = useRef(new Animated.Value(0)).current;

  function moveBall() {
    Animated.spring(value, {
      toValue: 300,
    }).start()
  }

  function recallBall() {
    Animated.timing(value, {
      toValue: 0,
      duration: 1000,
    }).start()
  }

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[{
            width: 150,
            height: 150,
            marginLeft: value,
            backgroundColor: "red",
            borderRadius: 75,
        }]}
      />
      <Pressable 
        style={styles.button}
        onPressIn={moveBall}
        onPressOut={recallBall}
        >
        <Text>Click Me!</Text>
      </Pressable>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },

  button: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
})
