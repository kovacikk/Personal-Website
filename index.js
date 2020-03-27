const express = require('express')
const app = express()
const port = 8082

const path = require('path');
app.use(express.static(__dirname+'/'));

//Default
app.get('/', (req, res) => res.send('Hello World!'))

//Spaghetti
app.get('/spaghetti', function(req, res) {
	res.send('You are now accessing the spaghetti page!')
})

//Fish
app.get('/fish', function(req, res) {
	res.sendFile(path.join(__dirname+'/html/fish.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
