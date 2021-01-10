import React from 'react';
import {Text, View} from 'react-native';

const greetMsg = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <greetMsg name="Maru" />
    </View>
  );
}

export default Cafe;
