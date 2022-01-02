require('dotenv').config();

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

const apiKey = process.env.API_KEY
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
var path = require('path')
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/api', async(req, res) => {
    console.log("you key is", apiKey)
    const enteredUrl = req.body.url;
    const apiUrl = baseUrl + '?key=' + apiKey + '&url=' + enteredUrl + '&lang=en'
    console.log(apiUrl)
    const response = await fetch(apiUrl)
    try {
        const fetchedData = await response.json()
        console.log(fetchedData)
        res.send(fetchedData)
    } catch (error) {
        console.log("error", error)
    }


})


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})