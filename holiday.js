// testing out holiday api (may need to find another one)

let request = new XMLHttpRequest();
request.open("GET", "https://holidayapi.com/v1/holidays")
request.send();
request.onload = () => {
    console.log(request);
    if (request.status === 200){
        console.log(JSON.parse(request.response));
    }
    else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}