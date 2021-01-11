import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const appMain = () => {
  const [wasPressed,setPressStatus] = useState(false);
  
  return (
    <View>
      <Text>Press the button below</Text>
      <View style={{width:200}}>
        <Button
          title={wasPressed ? "You already pressed the button" : "Still waiting for you to press the button"}
          onPress={()=>{setPressStatus(true)}}
          disabled={wasPressed}
        />
      </View>
    </View>
  );
}

export default appMain;
