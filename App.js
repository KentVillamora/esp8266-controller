import React from 'react';
import {Text, View} from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
    </View>
  );
}

export default Cafe;
