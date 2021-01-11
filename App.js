import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

const SteerWheel = () => {
  const [clickCount, setClickCount] = useState(0);
  
  let textLog = '';
  if (clickCount > 1) {
    textLog = clickCount + ' cilcks';
  } else {
    textLog = '0 clicks';
  }
  
  return (
    <View style={styles.placement}>
      <Pressable onPress={()=>{setClickCount((current)=>current+1);}}>
        <>
        <View style={styles.handRing}/>
        <View style={styles.handSpoke}/>
        </>
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
}

export default SteerWheel;

const styles = StyleSheet.create({
  placement: {
    position: "absolute",
    left: 50,
    top: 30,
  },
  handRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: "black",
  },
  handSpoke: {
    width: 100,
    height: 20,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    top: 40,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 5,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  },
});
