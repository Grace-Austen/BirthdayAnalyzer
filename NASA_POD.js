//API key
API_KEY = 'E24iDq9jhvLGggYsFugUinAXI2aAeropVkq8DNZz'

//API url
api_url = 'https://api.nasa.gov/planetary/apod'

function nasaPOD(date) {
    return fetch(api_url+`?api_key=${API_KEY}&hd=True&date=${date}`, {"SameSite":"Strict"}).then((response) => {
        //get json
        return response.json()
    }).then(json =>{
        if(json["code"] === undefined){
            return {"date": json["date"], "img_url": json["hdurl"]} //image existed, return img url
        } else {
            new_date = `${current_date.getFullYear()}` + date.slice(4)
            return fetch(api_url+`?api_key=DEMO_KEY&hd=True&date=${new_date}`).then((response) => { //image didn't exist take date from this year
                json2 = response.json()
                return {"date": json2["date"], "img_url": json2["hdurl"]}
            })
        }
    })
}