const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080;
const lastPlayedSongs = require('./lastPlayedSongs');

let lastSongsList = {};
lastPlayedSongs.setSongsInterval('http://199.101.51.168:8054/played.html?sid=1', 15000, (songsList) => { lastSongsList = songsList });

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/lastSongsPlayed', function(request, response){
	console.log(lastSongsList);
	response.json(lastSongsList);
});

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
