import React, { useState } from 'react'
import { View, Button, StyleSheet, Dimensions, FlatList, SafeAreaView } from 'react-native'

const ColorGeneratorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <React.Fragment>
            <Button title="Add a color" onPress={() => { setColors([...colors, randomColor()]) }} />
            <FlatList
                data={colors}
                numColumns={3}
                renderItem={(item) => {
                    return (
                        <View style={[styles.box, { backgroundColor: item }]} />
                    )
                }}
                keyExtractor={item => item}
            />
        </React.Fragment>
    )
}

const randomColor = () => {
    let colorCode = '';
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}

const boxDimension = Dimensions.get('window').width * 0.25;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    box: {
        height: boxDimension,
        width: boxDimension,
        borderRadius: 10,
        elevation: 2,
        marginHorizontal: 10,
        marginVertical: 10
    }
})

export default ColorGeneratorScreen
