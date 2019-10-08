import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button style={styles.buttonStyle}
        onPress={() => { navigation.navigate('Components') }}
        title="Go to components demo"
        accessibilityLabel="Go to components demo" />

      <Button style={styles.buttonStyle} title="Go to components demo"
        accessibilityLabel="Go to components demo"
        onPress={() => { navigation.navigate('Lists') }}
      />

      <Button style={styles.buttonStyle} title="Go to Image Screen"
        accessibilityLabel="Go to Image Screen"
        onPress={() => { navigation.navigate('Image') }}
      />

      <Button style={styles.buttonStyle} title="Go to Counter Screen"
        accessibilityLabel="Go to Counter Screen"
        onPress={() => { navigation.navigate('Counter') }}
      />

      <Button style={styles.buttonStyle} title="Go to Color Generator Screen"
        accessibilityLabel="Go to Color Generator Screen"
        onPress={() => { navigation.navigate('ColorGenerator') }}
      />

      <Button style={styles.buttonStyle} title="Go to Color Box Screen"
        accessibilityLabel="Go to Color Box Screen"
        onPress={() => { navigation.navigate('ColorBox') }}
      />


    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    marginVertical: 20
  }
});

export default HomeScreen;
