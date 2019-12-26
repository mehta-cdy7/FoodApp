import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange , onTermSubmitted }) => {

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
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing = {onTermSubmitted}  />

        </View>);
}

const theme_style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgrey',
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
        marginBottom : 10,

    },

    inputStyle: {
        fontSize: 18,
        flex : 1,
    },

    iconStyle: {
        alignSelf: "center",
        fontSize: 30,
        marginHorizontal: 15,
    }

})

export default SearchBar;