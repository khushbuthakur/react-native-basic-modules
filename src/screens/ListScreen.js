import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

const ListScreen = () => {
    const friends = [
        {
            name: "Friend #1",
            id: "1",
            age: "1"
        },
        {
            name: "Friend #2",
            id: "2",
            age: "2"
        },
        {
            name: "Friend #3",
            id: "3",
            age: "3"
        },
        {
            name: "Friend #4",
            id: "4",
            age: "4"
        },
        {
            name: "Friend #5",
            id: "5",
            age: "5"
        },
        {
            name: "Friend #6",
            id: "6",
            age: "6"
        },
        {
            name: "Friend #7",
            id: "7",
            age: "7"
        },
        {
            name: "Friend #8",
            id: "8",
            age: "8"
        },
        {
            name: "Friend #9",
            id: "9",
            age: "9"
        },
        {
            name: "Friend #10",
            id: "10",
            age: "10"
        },
        {
            name: "Friend #11",
            id: "11",
            age: "11"
        },
        {
            name: "Friend #12",
            id: "12",
            age: "12"
        },
        {
            name: "Friend #13",
            id: "13",
            age: "13"
        },
        {
            name: "Friend #14",
            id: "14",
            age: "14"
        },
        {
            name: "Friend #15",
            id: "15",
            age: "15"
        },
        {
            name: "Friend #16",
            id: "16",
            age: "16"
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Friend's List</Text>
            <FlatList
                data={friends}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    // element == {item : {name: "Friend #1", id : 1, age : 1}, index : 0}
                    return (<Text style={styles.itemStyle} key={item.id}>{item.name} - Age  {item.age}</Text>)
                }}
                keyExtractor={item => item.id}
            />
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    titleStyle: {
        marginVertical: 5,
        fontSize: 30
    },
    itemStyle: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#eee',
        padding: 5,
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 5
        //elevation: 2
    }
});

export default ListScreen;


