import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const appMain = () => {
  const [clickCount, setClickCount] = useState(0);

  let textLog = '';
  if (clickCount > 0) {
    textLog = clickCount + ' clicks';
  } else {
    textLog = '0 clicks';
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Pressable onPress={() => {setClickCount((current) => current + 1);}}>
          <Text style={styles.text}>Click me!</Text>
        </Pressable>
      </View>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};
export default appMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "red",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
