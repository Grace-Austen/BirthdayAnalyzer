const axios = require("axios");


async function getSearches(i, month, day) {
    // defining request
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
        params: {q: 'florida man ' + month + ' ' + day, pageNumber: '1', pageSize: '10', autoCorrect: 'false'},
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
        console.log(response.data.value[i].url);
    })
    // request not received
    .catch(function (error) {
        // console.error(error);
    });

    
}

getSearches();