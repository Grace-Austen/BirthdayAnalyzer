// testing out holiday api (may need to find another one)


function getHoliday(date){

    var thisdate = date.split('-');
    var monthZero = parseInt(thisdate[1], 10);
    var dayZero = parseInt(thisdate[2], 10);

    return fetch('https://holidayapi.com/v1/holidays?pretty&key=7a2bad5e-6eb0-42c8-a3af-c84bc0725a89&country=US&year=2021&month=' + monthZero + '&day=' + dayZero, {
    method: "GET"
    })
    .then(response => {return response.json()}) 

}


