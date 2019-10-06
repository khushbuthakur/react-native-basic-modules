import React from "react";   // -> no curcly brace because we are importing entire react library
import { Text, StyleSheet, View } from "react-native";  // here we are importing small pieces of react native library that's y we used curly braces

const ComponentScreen = () => {
  const someArray = ['1', '2', '3']
  return (
    <View>
      <Text>{someArray}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentScreen;
