import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from '../components/SearchBar';
import UseResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";



const SearchScreen = () => {

    const [term, setTerm] = useState('');

    const [searchApi, results, errorMsg] = UseResults();

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => { setTerm(newTerm) }}
                onTermSubmitted={() => searchApi(term)} />

            {errorMsg ? <Text>{errorMsg}</Text> : null}

            <ScrollView>
                <ResultList title='entertainment' results={results} />
                <ResultList title='sports' results={results} />
                <ResultList title='business' results={results} />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchScreen;