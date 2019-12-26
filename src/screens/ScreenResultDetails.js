import React from "react";
import { View, StyleSheet, Text ,Image } from "react-native";

const ScreenDetails = ({ navigation }) => {

    

    return (
        <View>
            <Image style={styles.imageStyle} source={{ uri: navigation.getParam('url') }} />
            <Text style={styles.textInput}>{navigation.getParam('content')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle : {
        width: 400,
        height: 150,
        marginBottom: 5,

    },
    textInput: {
        fontSize: 16,
        fontWeight: '100',
        marginHorizontal: 5
    },
});

export default ScreenDetails;