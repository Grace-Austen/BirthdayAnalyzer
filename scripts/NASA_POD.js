function nasaPOD(date) {
    //API key
    API_KEY = 'E24iDq9jhvLGggYsFugUinAXI2aAeropVkq8DNZz'

    //API url
    api_url = 'https://api.nasa.gov/planetary/apod'

    return fetch_img_json(date).then(json =>{
        if(json["error"] !== undefined) {
            return {"date": json["date"], "img_url": "https://apod.nasa.gov/apod/image/2211/LunarEclipseRyanHan.jpg", "valid": false}
        }
        if(json["code"] !== undefined) {
            new_date = `${current_date.getFullYear()}` + date.slice(4)
            json = fetch_img_json(new_date)
        }
        return {"date": json["date"], "img_url": json["hdurl"], "valid": true} //image existed, return img url
    })
}

function fetch_img_json(date) {
    return fetch(api_url+`?api_key=${API_KEY}&hd=True&date=${date}`, {"SameSite":"Strict"}).then((response) => {
        //get json
        return response.json()
    })
}