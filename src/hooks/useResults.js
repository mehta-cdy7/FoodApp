import { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default () => {

    const [results, setResults] = useState([]);

    const [errorMsg, setErrorMessage] = useState('');

    const searchApi = async (searchTerm, searchCategory) => {

        try {
            const resp = await yelp.get('/top-headlines', {
                params: {
                    country: searchTerm,
                    category: searchCategory,
                    apiKey: '568ab9ae01ce48b496e1d8bd57bf38e7',
                }
            });

            setResults(resp.data.articles)

        } catch (err) {
            setErrorMessage(err)
        }
    }

    useEffect(() => {
        searchApi("in" , "")
    }, []);

    return [searchApi, results, errorMsg]

};

