// testing out holiday api (may need to find another one)



fetch('https://www.daysoftheyear.com/api/v1/date/', {
  method: "GET",
  headers: {"X-Api-Key": "69dbc4410e9e44d8fa70fa6261b72838"}
})
.then(response => response.json()) 
.then(json => console.log(json)); 


