//I couldn't figure out how require works...... but I did find and api that has an example using fetch - I've used it before for NASA POD and horoscope

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eddffe8a5cmsh0c8b5e295ad3bbep150f5cjsn14e5677b61e9',
		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
	}
};

function getSongs(date){
	url = `https://billboard-api2.p.rapidapi.com/billboard-200?date=${date}&range=1-10`
	return fetch(url, options)
	.then(response => {rjson = response.json(); console.log(rjson); return rjson})
}




//code will not run because of "require" call is only functional on hosted servers. Bc github pages doesnt fully host sites
// I have to find a workaround. There is an option called Browersify, which should help connect things, but when I tried
//it wasnt working. So I am unsure of what to do next but I am looking for solutions. Any help would be appreciated
//if you type in "Uncaught ReferenceError: require is not defined" on Google, you will see the issue I am having.
// const billboard = require("billboard-top-100").getChart;

// //Displays the top 100 songs
// function getSongs2(date) {
// 	billboard('hot-100', function(err, songs) {
// 	    if (
//         err) console.log(err);
// 	    let result = [];
// 	    for(let i=0; i<songs.length; i++) {
// 	    	let song = {name:songs[i].title, artist:songs[i].artist};
// 	    	result.push(song);
// 	    }
// 	    // callback(result);
//       callback(result);
// 	    return;
// 	});
// }

// module.exports = { getSongs };