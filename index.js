const express = require('express')
const app = express()
const port = 8082

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/spaghetti', function(req, res) {
	res.send('You are now accessing the spaghetti page!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
