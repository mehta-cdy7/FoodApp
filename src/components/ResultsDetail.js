import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.imageStyle}
                source={{ uri: result.urlToImage }}>
            </Image>

            <Text
                style={styles.sourceStyle}>{result.source.name}
            </Text>

            <Text
                style={styles.headingStyle}>{result.title}
            </Text>


        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        marginLeft: 15,
    },
    
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom : 5,
    },

    sourceStyle: {
        fontSize: 14,
        width: 250,
        fontWeight: 'bold',
    },

    headingStyle: {
        fontSize: 12,
        width: 250,
    }
});

export default ResultsDetail;