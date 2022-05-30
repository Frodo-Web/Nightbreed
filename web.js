const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080;
const lastPlayedSongs = require('./lastPlayedSongs');

let songsPlayed = {};
lastPlayedSongs.setSongsInterval('http://199.101.51.168:8054/played.html?sid=1', 15000, (songsList) => { songsPlayed = songsList });

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/played', function(request, response){
	console.log(songsPlayed);
	response.json(songsPlayed);
});

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
