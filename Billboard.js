const { getChart } = require('billboard-top-100');

// date format YYYY-MM-DD
getChart('hot-100', '2022-11-01', (err, chart) => {
  if (err) console.log(err);
  
  console.log(chart.week);
 
  console.log(chart.previousWeek.date);
  
  console.log(chart.nextWeek.url);

  console.log(chart.nextWeek.date);
  
  console.log(chart.songs);
  
  console.log(chart.songs[3]);
  
  console.log(chart.songs[0].title);
  
  console.log(chart.songs[0].artist);
  
  console.log(chart.songs[0].rank);
 
  console.log(chart.songs[0].cover);
  
  console.log(chart.songs[0].position.positionLastWeek);
  console.log(chart.songs[0].position.peakPosition);
  console.log(chart.songs[0].position.weeksOnChart);
});


getChart((err, chart) => {
  if (err) console.log(err);
  console.log(chart);
});

getChart('rock-digital-song-sales', (err, chart) => {
  if (err) console.log(err);
  console.log(chart);
});

const { listCharts } = require('billboard-top-100');

listCharts((err, charts) => {
  if (err) console.log(err);
  // array of all charts
  console.log(charts);
});