const express = require('express')
const app = express()
const port = 8080
const https = require('https')

var gamerTime = require('./utils.js');

const path = require('path');
app.use(express.static(__dirname+'/'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

var memory = "Nothing";

//Default
app.get('/', (req, res) => res.send('Hello World!\n'))

//spaghetti
app.get('/spaghetti', function(req, res) {
	res.send('You are now accessing the spaghetti page!\n')
})

//fishW
app.get('/fish', function(req, res) {
	res.sendFile(path.join(__dirname+'/html/fish.html'));
})

//fileUpload
app.get('/fileupload', function(req, res) {
	res.sendFile(path.join(__dirname+'/html/fileupload.html'));
})

//getMessage
app.get('/getMessage', function(req, res) {
	res.send(memory+'\n');
})

//setMessage
app.post('/setMessage', function (req, res) {
	memory = req.body.message;
	res.send('POST request\n\"' + memory + "\" recieved!\n");
})

app.get('/gamer', function(req, res) {
	var gamer = gamerTime.gamerTime()
	res.send(gamer);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
