import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const ResultsDetail = ({ result, navigation }) => {
    return (
        <View style={styles.container}>


            <TouchableOpacity
                onPress={() => { navigation.navigate('ShowResultDetail' ,{
                      url : result.urlToImage ,
                      content : result.content
                }) }}>
                <Image style={styles.imageStyle}
                    source={{ uri: result.urlToImage }}>
                </Image>

                <Text
                    style={styles.sourceStyle}>{result.source.name}
                </Text>

                <Text
                    style={styles.headingStyle}>{result.title}
                </Text>
            </TouchableOpacity>


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
        marginBottom: 5,
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

export default withNavigation(ResultsDetail);