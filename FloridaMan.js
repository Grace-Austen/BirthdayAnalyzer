async function getSearches(date) {
    // defining request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf5c1ebaa5msh882d068e31c56ecp1a13dajsnb7d4ba49e04c',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    //let query = `Florida%20Man%20${date}`;
    let query = 'hi'
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
getSearches('5-28');
//consolse.log(getSearches('may 25').data[0]);
