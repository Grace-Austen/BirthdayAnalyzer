document.addEventListener("DOMContentLoaded", run()) //wait for all the html elements to be loaded in before they can run

function run() {
    submit_button = document.getElementById("submit-button")
    date_input = document.getElementById("date-input")
    bday_text = document.getElementById("bday-text")

    current_date = new Date()
    chosen_date = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
    date_input.value = chosen_date

    setText(bday_text, inputToDateText(chosen_date))

    submit_button.addEventListener("click", event => setText(bday_text, inputToDateText(chosen_date)))
    date_input.addEventListener("input", event => {
        chosen_date = date_input.value
    })


}

function inputToDateText(input_date) {
    return new Date(input_date).toDateString()
}

function setText(elem, text) {
    elem.textContent = text
}