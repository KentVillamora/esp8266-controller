import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Hello World!</Text>
      <View style = {styles.container}>
        <Text>A text with style</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput style = {styles.inputText}
        defaultValue="Enter your name here"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
