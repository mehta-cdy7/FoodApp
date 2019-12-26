import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";


const ResultList = ({ title, results }) => {

    return (<View>

        <Text style={styles.titleStyle}>
            {title}
        </Text>

        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.publishedAt + Math.floor(Math.random() * 100) + 1}
            renderItem={({ item }) => {
                return <ResultsDetail result={item} />
            }} />
    </View>
    );
}

const styles = StyleSheet.create({

    titleStyle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,

    },
});

export default ResultList;