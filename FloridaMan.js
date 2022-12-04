const axios = require("axios");


const searchResults = {
    data:  ["url1", "url2", "url3"]
};

async function getSearches(date) {
    // defining request
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
        params: {q: 'florida man ' + date, pageNumber: '1', pageSize: '10', autoCorrect: 'false'},
        headers: {
            'X-RapidAPI-Key': 'bf5c1ebaa5msh882d068e31c56ecp1a13dajsnb7d4ba49e04c',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };

    // sending request
    axios.request(options)
    // recieved request
    .then(function (response) {
        // console.log(response.data);
        // return response.data.value[i].url;
        for (let i = 0; i < 3; i ++) {
            searchResults.data[i] = response.data.value[i].url;
        }
        return searchResults;
        
    })
    // request not received
    .catch(function (error) {
        // console.error(error);
    });

    
}

//getSearches();
