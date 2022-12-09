// Get information about this day in history from English Wikipedia


function getBirth(date){

    var thisdate = date.split('-');
    var month = thisdate[1]
    var day = thisdate[2]

    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;

    return response = fetch( url,
        {
            headers: {
                'Authorization': '736384216d67f0b95549611f6d6953377b95943a',
                'Api-User-Agent': 'BirthdayAnalyzer'
            }
        }
    ).then(response => {return response.json()}) 
}


function getDeath(date){

    var thisdate = date.split('-');
    var month = thisdate[1]
    var day = thisdate[2]

    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/deaths/${month}/${day}`;

    return response = fetch( url,
        {
            headers: {
                'Authorization': '736384216d67f0b95549611f6d6953377b95943a',
                'Api-User-Agent': 'BirthdayAnalyzer'
            }
        }
    ).then(response => {return response.json()}) 
}