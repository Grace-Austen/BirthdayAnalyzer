// testing out holiday api (may need to find another one)


function getHoliday(date){
    // split date at dashes
    var thisdate = date.split('-');

    // remove any possible leading zeros
    var monthZero = parseInt(thisdate[1], 10);
    var dayZero = parseInt(thisdate[2], 10);

    return fetch('https://holidays.abstractapi.com/v1/?api_key=a6a8315c85564bd297192308f647b2cb&country=US&year=2020&month=' + monthZero + '&day=' + dayZero, {
    method: "GET"
    })
    .then(response => {return response.json()}) 

}


