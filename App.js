import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  let textLog = '';
  if (clickCount > 0) {
    textLog = clickCount + ' clicks';
  } else {
    textLog = '0 clicks';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setClickCount((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;
