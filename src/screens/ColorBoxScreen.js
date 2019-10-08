import React, { useState } from 'react'
import { View, Button, FlatList, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'

const buttonArray = [
    {
        id: 1,
        color: 'red',
        operation: 'ADD'
    },
    {
        id: 2,
        color: 'red',
        operation: 'SUBTRACT'
    },
    {
        id: 3,
        color: 'green',
        operation: 'ADD'
    },
    {
        id: 4,
        color: 'green',
        operation: 'SUBTRACT'
    },
    {
        id: 5,
        color: 'blue',
        operation: 'ADD'
    },
    {
        id: 6,
        color: 'blue',
        operation: 'SUBTRACT'
    },
]

const ColorBoxScreen = () => {
    const [redColor, setRedColor] = useState(255);
    const [blueColor, setBlueColor] = useState(0);
    const [greenColor, setGreenColor] = useState(0);

    changeColor = (color, operation) => {
        let colorValue;

        switch (color) {
            case 'green':
                colorValue = changeColorValue(operation, greenColor);
                setGreenColor(colorValue);
                break;

            case 'blue':
                colorValue = changeColorValue(operation, blueColor);
                setBlueColor(colorValue);
                break;

            case 'red':
                colorValue = changeColorValue(operation, redColor);
                setRedColor(colorValue);
                break;
        }
    }

    changeColorValue = (operation, value) => {
        let colorValue = value;
        if (operation == 'ADD') {
            if (colorValue != 255) {
                colorValue += 10;
            }
        } else {
            if (colorValue != 0) {
                colorValue -= 10;
            }
        }
        return colorValue;
    }

    return (
        <React.Fragment>
            <View
                style={{
                    backgroundColor: `rgb(${redColor}, ${blueColor}, ${greenColor})`,
                    height: 100, width: 100,
                    borderRadius: 10,
                    margin: 10,
                    alignSelf: 'center'
                }}
            />

            <FlatList
                data={buttonArray}
                keyExtractor={item => item.id}
                onRefresh={() => { console.log('refresh opted') }}
                refreshing={false}
                numColumns={2}
                renderItem={({ item }) => {
                    let buttonTitle = 'More ';
                    let { color, operation } = item;
                    if (operation == 'ADD') {
                        buttonTitle += color
                    } else {
                        buttonTitle = `Less ${color}`;
                    }
                    return (
                        <TouchableOpacity style={styles.butonStyle} onPress={() => changeColor(color, operation)}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}> {buttonTitle}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    butonStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: 10,
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.4,
        // height: 40,
        borderRadius: 10,
        margin: 10
    }
})

export default ColorBoxScreen
