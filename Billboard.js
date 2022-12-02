const billboard = require("billboard-top-100").getChart;

//Displays the top 100 songs
function getSongs(callback) {
	billboard('hot-100', function(err, songs) {
	    if (err) console.log(err);
	    let result = [];
	    for(let i=0; i<songs.length; i++) {
	    	let song = {name:songs[i].title, artist:songs[i].artist};
	    	result.push(song);
	    }
	    callback(result);
	    return;
	});
}

module.exports = { getSongs };