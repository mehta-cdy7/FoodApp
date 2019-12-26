import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from '../components/SearchBar';
import UseResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";



const SearchScreen = (props) => {

    
    const [term, setTerm] = useState('');

    const [searchApi, resultsEntertainment, resultsSports, resultsBuisness, errorMsg] = UseResults();

    console.log('HOMEEEEEEEEEEEEEEE')

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => { setTerm(newTerm) }}
                onTermSubmitted={() => {
                    searchApi(term, "entertainment")
                        , searchApi(term, "sports")
                        , searchApi(term, "business")
                }} />

            {errorMsg ? <Text>{errorMsg}</Text> : null}

            <ScrollView>
                <ResultList title='entertainment' results={resultsEntertainment} />
                <ResultList title='sports' results={resultsSports} />
                <ResultList title='business' results={resultsBuisness} />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchScreen;