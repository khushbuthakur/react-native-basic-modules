import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ data }) => {

    let { title, imageSource, id:score } = data;

    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Score : {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageDetail
