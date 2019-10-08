import React, { useState } from 'react'; // useState is a hook
import { View, Text, Button } from 'react-native'

const CounterScreen = () => {
    // counter is variable, setCounter is function used for setting value of counter

    /* array destructuring -> for e.g. 

     const colors = ['red','blue','green'];
     
     const [colorRed, colorBlue] = colors;

     now,  colorRed = 'red'  // as good as colorRed = colors[0]
     colorBlue = 'blue'     // colorBlue = colors[1];

     we have pulled out first two values from array 
      */

    const [counter, setCounter] = useState(0); // 0 is initial value

    return (
        <View>
            <Button title="Increase" onPress={() => { setCounter(counter + 1) }} />
            <Text>Current Count : {counter}</Text>
            <Button title="Decrease" onPress={() => { setCounter(counter - 1) }} />
        </View>
    )
}

export default CounterScreen
