import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange }) => {

    return (
        <View style={theme_style.backgroundStyle} >
            <Feather
                name="search"
                style={theme_style.iconStyle} />

            <TextInput
                style={theme_style.inputStyle}
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={false}
                value = {term}
                onChangeText = {(newTerm) => onTermChange(newTerm)} />
        </View>);
}

const theme_style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgrey',
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row'

    },

    inputStyle: {
        fontSize: 18,
    },

    iconStyle: {
        alignSelf: "center",
        fontSize: 30,
        marginHorizontal: 15,
    }

})

export default SearchBar;