document.addEventListener("DOMContentLoaded", run()) //wait for all the html elements to be loaded in before they can run

function run() {
    submit_button = document.getElementById("submit-button")
    date_input = document.getElementById("date-input")
    bday_text = document.getElementById("bday-text")

    current_date = new Date()
    chosen_date = `${current_date.getFullYear()}-${current_date.getMonth() + 1}-${current_date.getDate()}`
    date_input.value = chosen_date

    setText(bday_text, inputToDateText(chosen_date))

    submit_button.addEventListener("click", event => setText(bday_text, inputToDateText(chosen_date)))
    date_input.addEventListener("input", event => {
        chosen_date = date_input.value
    })


}

function inputToDateText(input_date) {
    if (input_date) {
        day = new Date(input_date).getDay()
        console.log(input_date)
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
                dateString = "Enter a date!"
                break;
        }
        switch (date[1]) {
            case "1":
                dateString += "January "
                break;
            case "2":
                dateString += "February "
                break;
            case "3":
                dateString += "March "
                break;
            case "4":
                dateString += "April "
                break;
            case "5":
                dateString += "May "
                break;
            case "6":
                dateString += "June "
                break;
            case "7":
                dateString += "July "
                break;
            case "8":
                dateString += "August "
                break;
            case "9":
                dateString += "September "
                break;
            case "10":
                dateString += "October "
                break;
            case "11":
                dateString += "November "
                break;
            case "12":
                dateString += "December "
                break;
            default:
                dateString = "Enter a date!"
                break;
        }
        dateString += `${date[2]}, ${date[0]}`
        return dateString
    }
    return "Enter a date!"
}

function setText(elem, text) {
    elem.textContent = text
}