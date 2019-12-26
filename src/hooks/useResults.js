import { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default () => {

    const [resultsEntertainment, setResultsEntertainment] = useState([]);
    const [resultsSports, setResultsSports] = useState([]);
    const [resultsBuisness, setResultsBuisness] = useState([]);

    const [errorMsg, setErrorMessage] = useState('');

    const searchApi = async (searchTerm, searchCategory) => {

        try {
            const resp = await yelp.get('/top-headlines', {
                params: {
                    country: searchTerm,
                    category: searchCategory,
                    apiKey: 'YOUR_API_KEY',
                }
            });

            if (searchCategory === 'entertainment') {
                setResultsEntertainment(resp.data.articles)
            } else if (searchCategory === 'sports') {
                setResultsSports(resp.data.articles)
            } else if (searchCategory === 'business') {
                setResultsBuisness(resp.data.articles)
            }

        } catch (err) {
            setErrorMessage(err)
        }
    }

    useEffect(() => {
        searchApi("in", "")
    }, []);

    return [searchApi, resultsEntertainment,resultsSports,resultsBuisness, errorMsg]

};

