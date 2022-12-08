async function getSearches(date) {
    // defining request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eddffe8a5cmsh0c8b5e295ad3bbep150f5cjsn14e5677b61e9',//'bf5c1ebaa5msh882d068e31c56ecp1a13dajsnb7d4ba49e04c',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    let query = `Florida%20Man%20${date}`;
    let pageNumber = 1;
    let pageSize = 10;
    let autoCorrect = true;
    let safeSearch = false;
    return fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?
        q=${query}
        &pageNumber=${pageNumber}
        &pageSize=${pageSize}
        &autoCorrect=${autoCorrect}`, options)
    .then(response => {return response.json()})
    
}



async function getBingSearches(date) {
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'bf5c1ebaa5msh882d068e31c56ecp1a13dajsnb7d4ba49e04c',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    let searchResults = {
        name: "error name",
        url: "error url",
        description: "error description"
    }

    let query = `Florida%20Man%20${date}`;
    return fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${query}&safeSearch=Off&textFormat=Raw`, options)
        .then(response => response.json())
        .then(response => {
            //console.log(response);
            searchResults.name = response.value[0].name;
            searchResults.url = response.value[0].url;
            searchResults.description = response.value[0].description;
            return searchResults;
        })
        .catch(err => {
            console.error(err);
            return searchResults;
        });
}
//getBingSearches('5-28');
getBingSearches('5-28').then(results => console.log(results));
//consolse.log(getSearches('may 25').data[0]);
