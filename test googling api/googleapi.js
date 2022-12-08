document.cookie = "SameSite=Strict"

function display(){
    p = document.getElementById("par")
    getSearches("2005-02-20").then(data => {
        console.log(data.webPages.value[0]["name"])
        p.innerHTML = data.webPages.value[0]["name"]
    })
}

async function getSearches(date) {
    // defining request
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'eddffe8a5cmsh0c8b5e295ad3bbep150f5cjsn14e5677b61e9',
            'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
        }
    };
    
    return fetch('https://bing-web-search1.p.rapidapi.com/search?q=ducks&mkt=en-us&safeSearch=Off&textFormat=Raw&freshness=Day', options)
        .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    
}
// getSearches('5-28');
//consolse.log(getSearches('may 25').data[0]);
