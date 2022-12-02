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
        switch(day) {
            case 0:
                dateString = "Sunday, "
                break;
            case 1:
                dateString = "Monday, "
                break;
            case 2:
                dateString = "Tuesday, "
                break;
            case 3:
                dateString = "Wednesday, "
                break;
            case 4:
                dateString = "Thursday, "
                break;
            case 5:
                dateString = "Friday, "
                break;
            case 6:
                dateString = "Saturday, "
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


    bday_text = document.getElementById("bday-text")
    horoscope_container = document.getElementById("horoscope-container")
    nasaPOD_img = document.getElementById("NASA_POD-img")
    nasaPOD_text = document.getElementById("NASA_POD-text")
    billboard_list = document.getElementById("billboard-container")
    billboard_text = document.getElementById("billboard-text")

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
    getHoroscope(chosen_date).then(data => {
        horoscope_container.innerHTML = `
                                        <p id="horoscope-type">${getSign(chosen_date)}</p>
                                        <p id="horoscope-descr">${data.description}</p>
                                        <p>Your lucky time today is ${data.lucky_time}</p>
                                        <p>Your power color today is ${data.color}</p>
                                        <p>You are compatible with the ${data.compatibility} sign</p>
                                        <p>You are likely to be in a ${data.mood} mood today!</p>
                                        `
    })

    Billboard(chosen_date).then(data => {
        billboard_list.innerHTML = ` <p id="billboard-type">${getSongs(chosen_date)}</p> `

    })
}

function setText(elem, text) {
    elem.textContent = text
}
