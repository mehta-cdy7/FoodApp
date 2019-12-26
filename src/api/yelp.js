import axios from 'axios';

export default axios.create({

    baseURL: 'https://newsapi.org/v2/top-headlines?',
   /*  headers: {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "c8ddf08fa4msh82a6e8e7de33f0ap15bb74jsn361c1f85307d"
    }, */


});