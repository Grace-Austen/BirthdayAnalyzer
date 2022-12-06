function getHoroscope(date){
    sign = getSign(date)
    url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '90a36667c8msh154befc3ee1aec3p155e52jsnce58845b7f9a',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };
    return fetch(url, options)
        .then(response => {return response.json()})
}

function getSign(date){
    split_date = date.split("-") //[year, month, day]
    month = +split_date[1]
    day = +split_date[2]
    //all months have less than 31 days, not going to make it month specific
    if((month == 3 && (21 <= day)) || (month == 4 && (1 <= day && day <= 20))) return "Aries"
    if((month == 4 && (21 <= day)) || (month == 5 && (1 <= day && day <= 20))) return "Taurus"
    if((month == 5 && (21 <= day)) || (month == 6 && (1 <= day && day <= 21))) return "Gemini"
    if((month == 6 && (22 <= day)) || (month == 7 && (1 <= day && day <= 22))) return "Cancer"
    if((month == 7 && (23 <= day)) || (month == 8 && (1 <= day && day <= 22))) return "Leo"
    if((month == 8 && (23 <= day)) || (month == 9 && (1 <= day && day <= 22))) return "Virgo"
    if((month == 9 && (23 <= day)) || (month == 10 && (1 <= day && day <= 22))) return "Libra"
    if((month == 10 && (23 <= day)) || (month == 11 && (1 <= day && day <=22))) return "Scorpio"
    if((month == 11 && (23 <= day)) || (month == 12 && (1 <= day && day <= 21))) return "Sagittarius"
    if((month == 12 && (12 <= day)) || (month == 1 && (1 <= day && day <= 19))) return "Capricorn"
    if((month == 1 && (20 <= day)) || (month == 2 && (1 <= day && day <= 18))) return "Aquarius"
    if((month == 2 && (19 <= day)) || (month == 3 && (1 <= day && day <= 20))) return "Pisces"
}
