//code will not run because of "require" call is only functional on hosted servers. Bc github pages doesnt fully host sites
// I have to find a workaround. There is an option called Browersify, which should help connect things, but when I tried
//it wasnt working. So I am unsure of what to do next but I am looking for solutions. Any help would be appreciated
//if you type in "Uncaught ReferenceError: require is not defined" on Google, you will see the issue I am having.
const billboard = require("billboard-top-100").getChart;

//Displays the top 100 songs
function getSongs(date) {
	billboard('hot-100', function(err, songs) {
	    if (
        err) console.log(err);
	    let result = [];
	    for(let i=0; i<songs.length; i++) {
	    	let song = {name:songs[i].title, artist:songs[i].artist};
	    	result.push(song);
	    }
	    // callback(result);
      callback(result);
	    return;
	});
}

module.exports = { getSongs };