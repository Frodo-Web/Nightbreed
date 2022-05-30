const axios = require("axios");
const cheerio = require("cheerio");

async function LastPlayedSongs(url) {
	let i = 0;
	let playedList = {};
	const { data } = await axios.get(url);
	const loadedData = cheerio.load(data);
	const listItems = loadedData("table tbody tr");
	listItems.each(function (idx, el) {
		if (idx >= 3) {
			playedList = {...playedList, [i.toString()]: {
				'playedAt': loadedData(el.childNodes[0]).text(),
				'songTitle': loadedData(el.childNodes[1]).text()
			}}
			i++;
		}
	});
	return playedList;
};
const setSongsInterval = (url, interval, callback) => {
    let songsPlayed = {};
    (async() => {
        songsPlayed = await LastPlayedSongs(url);
        callback(songsPlayed);
    })();
    const songsListInterval = setInterval(async () => {
        songsPlayed = await LastPlayedSongs(url);
        callback(songsPlayed);
    }, interval);
};

module.exports = { setSongsInterval };