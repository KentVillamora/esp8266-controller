import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TextInput} from 'react-native';

 const appMain = () => {
   return (
    <ScrollView>
      <Text>Hello World!</Text>
      <View style = {styles.container}>
        <Text>A text with style: {fullMessage("Hello", "World", "!")}</Text>
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
export default appMain;

const fullMessage = (fstWrd, sndWrd, trdWrd) ==> {
 return frsWrd + " " + sndWrd + " " + trdWrd;
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
