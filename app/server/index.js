const express = require('express')
const app = express()
const port = 6225
const https = require('https')
var formidable = require('formidable')
var fs = require('fs')
var lineReader = require('line-reader')
const { Pool, Client } = require('pg')
const connectionString = 'postgres://qngehzjp:X_X_jnJh8EZ0UylesESWRV0Dq7fkqCrd@drona.db.elephantsql.com:5432/qngehzjp'
const pool = new Pool({
  connectionString: connectionString,
})
const {promisify} = require('util');

// Original Json Data File
const json = require('./json/projects.json')
// Json Object with Cleaned Values to Search Through
var json_clean;
// String Array of Projects for Easier Creation of Filtered List
var json_clean_string = [];

var ReactDOMServer = require('react-dom/server');


var gamerTime = require('./utils.js');

//const {spawn} = require('child_process');

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

//@author Vitim.us https://gist.github.com/victornpb/7736865
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

// Search Through Projects, Send Json With Filtered Results
app.post('/server/projects/', function(req, res) {

	console.log(req.body.post);

	var score_list = [];

	// No Query
	if (req.body.post == "") {
		res.json(json_clean)
	}
	// Query
	else {

		for (let i in json) {

			var count = occurrences(json[i]["name"], req.body.post, false);

			if (json[i]["name"].includes(req.body.post)) {
				
			}
		}
	}
})

function prepareJson() {
	//json

	//console.log(json[0]);

	var newJson = "[\n"

	for (let i in json) {
		var project = "";
		project = project + "{\n"

		project = project + "\"name\": \"" + json[i]["name"] + "\",\n";

		var languageString = ""
		for (let j in json[i]["languages"]) {
			if (j == json[i]["languages"].length - 1) {
				languageString = languageString + json[i]["languages"][j];
			}
			else {
				languageString = languageString + json[i]["languages"][j] + ", ";
			}
		}

		project = project + "\"languages\": \"" + languageString + "\",\n";

		project = project + "\"description\": \"" + json[i]["description"] + "\",\n";

		var linkString = ""
		for (let j in json[i]["link"]) {
			if (j == json[i]["link"].length - 1) {
				linkString = linkString + json[i]["link"][j];
			}
			else {
				linkString = linkString + json[i]["link"][j] + " ";
			}
		}

		project = project + "\"link\": \"" + linkString + "\",\n";

		project = project + "\"date\": \"" + json[i]["date"] + "\"\n";

		project = project + "}\n";

		newJson = newJson + project;

		if (i != json.length - 1) {
			newJson = newJson + ",\n"
		}

		json_clean_string.push(project);
	}

	newJson = newJson + "]";

	//console.log(newJson);

	json_clean = JSON.parse(newJson);

	//console.log(json_clean_string);
}

//Test Python
app.post('/server/python/', async function(req, res) {

	const { spawn } = require('child_process');
	const process = spawn('python', ['./python/projects.py', req.body.post]);

	process.stdout.on('data', function(data) {
		data = data.toString();
		res.json(data);
	});
})

//Update Chat
app.get('/server/chatUpdate/', async function(req, res) {
	var messageArray = [];
	
	query = promisify(pool.query).bind(pool);

	//Get Last 50 messages
	var qResult = await query('SELECT message FROM (SELECT message_id, message FROM messages ORDER BY message_id DESC LIMIT 50) SQ ORDER BY message_id ASC');

	//Store Last 50 messages into Array
	for (var i = 0; i < qResult.rows.length; i++) {
		messageArray.push(qResult.rows[i].message);
	}
	
	res.send(messageArray);
})

//Chat
app.post('/server/chat/', async function test (req, res) {

	var messageArray = [];

	try {
		query = promisify(pool.query).bind(pool);

		//Check Number of Messages
		var messageNumber = await query("SELECT COUNT(*) AS count FROM messages;");
		var count = messageNumber.rows[0].count;

		//If greater than equal to 500 trim to 49
		if (count >= 500) {
			var remove = await query("DELETE FROM messages WHERE message_id IN (SELECT message_id FROM messages LIMIT 451)");
		}

		//Get Last Message_Id
		var idNumber;
		var id = await query("SELECT message_id FROM messages ORDER BY message_id DESC LIMIT 1");
		if (id.rows.length > 0) {
			idNumber = id.rows[0].message_id;
		}
		else {
			idNumber = 0;
		}

		var message = req.body.post;
		
		//Replace all Apostrophe's with two because of SQL syntax
		message = message.replace(/'/g, "\'\'");

		if (message.length > 256) {
			message = message.substring(0,255);
		}

		//Insert New Message
		var waitTime = await query("INSERT INTO messages(message) VALUES ('" + idNumber + ": " + message + "');");

		//Get Last 50 messages
		var qResult = await query('SELECT message FROM (SELECT message_id, message FROM messages ORDER BY message_id DESC LIMIT 50) SQ ORDER BY message_id ASC');

		//Store Last 50 messages into Array
		for (var i = 0; i < qResult.rows.length; i++) {
			messageArray.push(qResult.rows[i].message);
		}

	} catch (e) {
		console.log(e);
	}

	res.send(messageArray);

})


prepareJson();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
