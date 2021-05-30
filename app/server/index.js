const express = require('express')
const app = express()
const port = 6225

const path = require('path');
app.use(express.static(__dirname+'/'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));


//Run Python Script to Retrieve Projects Json
app.post('/server/python/', async function(req, res) {

	const { spawn } = require('child_process');
	const process = spawn('python', ['./python/projects.py', req.body.post]);
	
	process.stdout.on('data', function(data) {
		data = data.toString();
		res.json(data);
	});
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
