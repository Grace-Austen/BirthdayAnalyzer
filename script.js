document.addEventListener("load", run()) //wait for all the html elements to be loaded in before they can run
document.cookie = "SameSite=Strict"


function run() {
    submit_button = document.getElementById("submit-button")
    date_input = document.getElementById("date-input")

    current_date = new Date()
    chosen_date = `${current_date.getFullYear()}-${String(current_date.getMonth()+1).padStart(2,"0")}-${String(current_date.getDate()).padStart(2,"0")}`
    date_input.value = chosen_date

    update(chosen_date)

    date_input.addEventListener("input", event => {
        chosen_date = date_input.value
    })
    
    submit_button.addEventListener("click", update)

}

function inputToDateText(input_date) {
    if (input_date) {
        error_message = "Enter a date!"
        day = new Date(input_date).getDay()
        date = input_date.split("-")
        console.log(day)
        switch(day) {
            case 0:
                dateString = "Monday, "
                break;
            case 1:
                dateString = "Tuesday, "
                break;
            case 2:
                dateString = "Wednesday, "
                break;
            case 3:
                dateString = "Thursday, "
                break;
            case 4:
                dateString = "Friday, "
                break;
            case 5:
                dateString = "Saturday, "
                break;
            case 6:
                dateString = "Sunday, "
                break;
            default:
                dateString = error_message
                break;
        }
        switch (+date[1]) {
            case 1:
                dateString += "January "
                break;
            case 2:
                dateString += "February "
                break;
            case 3:
                dateString += "March "
                break;
            case 4:
                dateString += "April "
                break;
            case 5:
                dateString += "May "
                break;
            case 6:
                dateString += "June "
                break;
            case 7:
                dateString += "July "
                break;
            case 8:
                dateString += "August "
                break;
            case 9:
                dateString += "September "
                break;
            case 10:
                dateString += "October "
                break;
            case 11:
                dateString += "November "
                break;
            case 12:
                dateString += "December "
                break;
            default:
                dateString = error_message
                break;
        }
        dateString += `${date[2]}, ${date[0]}`
        return dateString.includes(error_message) ? error_message : dateString
    }
    return "Enter a date!"
}

function update(chosen_date){

    chosen_date = date_input.value

    console.log(chosen_date)

    bday_text = document.getElementById("bday-text")

    //spacey stuff elements
    nasaPOD_img = document.getElementById("NASA_POD-img")
    nasaPOD_text = document.getElementById("NASA_POD-text")
  
    //call funcs, set corresponding elements
    curr_date_text = inputToDateText(chosen_date)
    setText(bday_text, curr_date_text)
    nasaPOD(chosen_date).then(data => {
        nasaPOD_img.src = data["img_url"]
        if(data["valid"]){        
            nasaPOD_text.textContent = `NASA picture of the day from ${curr_date_text}`
        } else {
            nasaPOD_text.innerHTML = "Out of image fetches<br>NASA picture of the day from November 11, 2022"
        }
    })

    horoscope_container = document.getElementById("horoscope-container")

    getHoroscope(chosen_date).then(data => {
        horoscope_container.innerHTML = `
                                        <p id="horoscope-type"><b>${getSign(chosen_date)}</b></p>
                                        <hr style="width: 90%">
                                        <p id="horoscope-descr" class="horoscope-text">${data.description}</p>
                                        <br>
                                        <p class="horoscope-text">Your lucky time today is ${data.lucky_time}</p>
                                        <p class="horoscope-text">Your power color today is ${data.color}</p>
                                        <p class="horoscope-text">You are compatible with the ${data.compatibility} sign</p>
                                        <p class="horoscope-text">You are likely to be in a ${data.mood} mood today!</p>
                                        `
    })

    movie_title = document.getElementById("movie-title")
    movie_text1 = document.getElementById("movie-text1")
    movie_text2 = document.getElementById("movie-text2")
    movie_text3 = document.getElementById("movie-text3")
    movie_pic1 = document.getElementById("movie_pic1")
    movie_pic2 = document.getElementById("movie_pic2")
    movie_pic3 = document.getElementById("movie_pic3")
   
   getMovies(chosen_date).then(data => {
    movie_title.textContent = `Movies`

    movie_text1.textContent = `${data.results[0].original_title}`
    movie_pic1.src =`https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`
    
    movie_text2.textContent = `${data.results[1].original_title}`
    movie_pic2.src = `https://image.tmdb.org/t/p/w500/${data.results[1].poster_path}`

    movie_text3.textContent = `${data.results[2].original_title}`
    movie_pic3.src = `https://image.tmdb.org/t/p/w500/${data.results[2].poster_path}`
    })

    //holiday elements
    holiday_container = document.getElementById("holiday-container")
    holiday_title = document.getElementById("holiday-title")
    holiday_text1 = document.getElementById("holiday-text1")
    holiday_text2 = document.getElementById("holiday-text2")
    holiday_text3 = document.getElementById("holiday-text3")

    getHoliday(chosen_date).then(data => {

        holiday_title.textContent = `Holidays on ${curr_date_text}`
        // console.log(data)
        // console.log(data[0])
        if(typeof(data[0]) !== "undefined")
            holiday_text1.textContent = `1. ${data[0].name}`
        else
            holiday_text1.textContent = `There are no holiday's on this day`
        if (typeof(data[1]) !== "undefined")
            holiday_text2.textContent = `2. ${data[1].name}`
        else
            holiday_text2.textContent = ` `
        if (typeof(data[2]) !== "undefined")
            holiday_text3.textContent = `3. ${data[2].name}`
        else
            holiday_text3.textContent = ` `
    })

     birth_container = document.getElementById("famous-birth-container")
    // birth_title = document.getElementById("birth-title")
    // birth_text1 = document.getElementById("birth-text1")
    // birth_text2 = document.getElementById("birth-text2")
    // birth_text3 = document.getElementById("birth-text3")


    getBirth(chosen_date).then(data => {

        pages0 = data.births[0].pages
        console.log( data.births[0].pages[0].content_urls.desktop.page)

        var max = data.births.length

        var first = Math.floor(Math.random() * max);
        var second = Math.floor(Math.random() * max);
        var third = Math.floor(Math.random() * max);

        birth_container.textContent = `Famous Birthdays`

        birth_container.innerHTML = `
                                        <h3 id="birth-title"><b>Famous Birthdays</b></h3>
                                        <tr>
                                            <ol id="famous-birth-list">
                                            <li><a href="${data.births[first].pages[0].content_urls.desktop.page}">${data.births[first].text}</a></li>
                                            <li><a href="${data.births[second].pages[0].content_urls.desktop.page}">${data.births[second].text}</a></li>
                                            <li><a href="${data.births[third].pages[0].content_urls.desktop.page}">${data.births[third].text}</a></li>
                                            </ol>
                                        </tr>
                                        `

        // birth_title.textContent = `Famous Birthdays`
        // birth_text1.textContent = `<a href="${data.births[first].pages[0].content_urls.desktop.page}">${data.births[first].text}</a>`
        // birth_text2.textContent = `${data.births[second].text}`
        // birth_text3.textContent = `${data.births[third].text}`



    })


    death_title = document.getElementById("death-title")
    death_text1 = document.getElementById("death-text1")
    death_text2 = document.getElementById("death-text2")
    death_text3 = document.getElementById("death-text3")

    getDeath(chosen_date).then(data => {
        console.log(data)

        var max = data.deaths.length

        var first = Math.floor(Math.random() * max);
        var second = Math.floor(Math.random() * max);
        var third = Math.floor(Math.random() * max);

        death_title.textContent = `Famous Deaths (RIP)`
        death_text1.textContent = `${data.deaths[first].text}`
        death_text2.textContent = `${data.deaths[second].text}`
        death_text3.textContent = `${data.deaths[third].text}`
    })


}


function setText(elem, text) {
    elem.textContent = text
}
