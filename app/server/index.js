const express = require('express')
const app = express()
const port = 6225
const https = require('https')
var formidable = require('formidable')
var fs = require('fs')

var ReactDOMServer = require('react-dom/server');


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

app.get('/server/', function(req, res) {
	res.send({express: 'Hello From Express' });
})

app.post('/server/message/', function(req, res) {
	console.log(req.body);
	res.send(
		'This is what was sent: ' + req.body.post
	);
})

class LinkedListNode {
	constructor(message) {
		this.message = message;
		this.next = null;
		this.prev = null;
	}
}

var chatHead = null;
var chatLength = 0;
var counter = 0;

function addChat(message) {
	if (chatLength != 50) {
		if (chatHead == null) {
			const head = new LinkedListNode(counter + ": " + message + "\n");
			head.next = head;
			head.prev = head;

			chatHead = head;
		}
		else {
			const newNode = new LinkedListNode(counter + ": " + message + "\n");
			newNode.prev = chatHead.prev;
			newNode.next = chatHead;
			chatHead.prev.next = newNode;
			chatHead.prev = newNode;			
		}
		counter++;
		chatLength++;
	}else {
		const newNode = new LinkedListNode(counter + ": " + message + "\n");
		newNode.prev = chatHead.prev;
		chatHead.prev.next = newNode;
		newNode.next = chatHead.next;
		chatHead.next.prev = newNode;

		counter++;
	}
}

function readChat() {
	var result = "";

	var next = chatHead;
	if (next != null) {
		while (next.next != chatHead) {
			result = result + next.message;
			next = next.next;
		}
		result = result + next.message
	}
	return result;
}

app.post('/server/chat/', function(req, res) {
	console.log(req.body);

	addChat(req.body.post);

	var test = readChat();
	res.set('Content-Type', 'text/html');
	res.send( new Buffer('<h2>' + test + "</h2>"));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
