const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 8080
const fs = require('fs')

const apiKeys = require('./.config/apiKeys')
app.set('view engine', 'ejs')
app.set('trust proxy', true)
app.use(express.static(__dirname + '/public'))

app.get('/', async (req, res) => {
	try {
		const data = await getData()
		res.render('index', {data})
		log(req, 'success')
	} catch(e){
		console.log(e)
		res.render('error')
		log(req, 'error')
	}
})

app.listen(port, () => {
	console.log(`App listening at port: ${port}`)
})


function getData(){
	return new Promise((resolve,reject) => {
		try {
			fetch('[API ENDPOINT]',{
				method: 'POST',
				body: JSON.stringify({parameter: 'parameters'}),
				headers: { 'Content-Type': 'application/json' }
			})
				.then(response => response.json())
				.then(data => {
					resolve(data.data[0])
				})
		} catch (e) {
			reject(e)
		}
	})
}

function log(req, msg){
	const d = new Date()
	let line = `${req.ip},${msg},${d.getTime()},${d.toTimeString()}\n`
	fs.appendFile('access_log.csv', line, function (err) {
		if (err) throw err
	})
}
