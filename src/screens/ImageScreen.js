import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail';
let basePath = '../../assets/';
const cardArray = [
    {
        id: 1,
        title: 'Forests',
        imageSource: require(basePath + 'forest.jpg')
    },
    {
        id: 2,
        title: 'Beach',
        imageSource: require(basePath + 'beach.jpg')
    },
    {
        id: 3,
        title: 'Mountain',
        imageSource: require(basePath + 'mountain.jpg')
    },
]

const ImageScreen = () => {
    return (
        <React.Fragment>
            {
                cardArray.map((item) => {
                    let { id } = item;
                    return (<ImageDetail key={id} data={item} />)
                })
            }
        </React.Fragment>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen
