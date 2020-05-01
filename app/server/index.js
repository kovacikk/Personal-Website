const express = require('express')
const app = express()
const port = 6225
const https = require('https')
var formidable = require('formidable')
var fs = require('fs')

var gamerTime = require('./utils.js');

const {spawn} = require('child_process');

const path = require('path');
app.use(express.static(__dirname+'/'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

express.static("images");
app.use(express.static('images'))

express.static("python/plots")
app.use(express.static("python/plots"))

var memory = "Nothing";

//Default
app.get('/server/', (req, res) => res.send('Hello World!\n'))

//spaghetti
app.get('/server/spaghetti', function(req, res) {
	res.send('You are now accessing the spaghetti page!\n')
})

//fishW
app.get('/server/fish', function(req, res) {
	res.sendFile(path.join(__dirname+'/html/fish.html'));
})

//getDate
app.get('/server/time', function(req, res) {
	var date = new Date();
	res.send(date.toLocaleTimeString());
})

//fileRequest
app.get('/server/fileRequest', function(req, res) {
	res.sendFile(path.join(__dirname+'/html/fileRequest.html'));
})

//fileUpload
app.post('/server/fileUpload', function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {

		var date = new Date().toISOString().slice(0,10);

		var oldpath = files.filetoupload.path;
		
		//Directory file will be uploaded to
		var dir = path.join(__dirname + '/filesUploaded/' + date + '/');
		
		//Make directory if it doesn't already exist
		fs.mkdir(dir, function(err) {
			//Directory already exists
			if(err) {
				if (err.code == 'EEXIST') cb(null);
				else cb(err);
			}
		});

		//Store uploaded file to 
		fs.rename(oldpath, path.join(__dirname+'/filesUploaded/'+ date + '/' + files.filetoupload.name), function(err) {
			if (err) throw err;
			res.write('File uploaded and moved!');
			res.end();
		});

		//res.send("File Uploaded\n");
		//res.end();
	});

})

//getMessage
app.get('/server/getMessage', function(req, res) {
	res.send(memory+'\n');
})

//setMessage
app.post('/server/setMessage', function (req, res) {
	memory = req.body.message;
	res.send('POST request\n\"' + memory + "\" recieved!\n");
})

app.get('/server/gamer', function(req, res) {
	var gamer = gamerTime.gamerTime()
	res.send(gamer);
})

app.get('/server/api/hello', function(req, res) {
	res.send({express: 'Hello From Express' });
})

app.post('/server/api/world', function(req, res) {
	console.log(req.body);
	res.send(
		'This is what was sent: ' + req.body.post
	);
})

app.get('/server/python/', function(req, res) {
	var pythonData;
	const python = spawn('python', [path.join(__dirname+'/python/script.py')]);

	python.stdout.on('data', function(data) {

		console.log('Pipe data from python script ...');
		pythonData = data.toString();
	});

	python.on('close', function(code) {
		console.log('child process close all stdio with code ' + code);
		res.send({express: pythonData});
	});
})

app.get('/server/plot/', function(req, res) {
	var pythonData;
	const python = spawn('py2', [path.join(__dirname+'/python/plot.py')]);

	python.stdout.on('data', function(data) {
		console.log('Pipe data from python script ...');
		pythonData = data.toString();
	});

	python.on('close', function(code) {
		console.log('child process close all stdio with code ' + code);
		res.send({express: pythonData});
	});

	//console.log(python);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
