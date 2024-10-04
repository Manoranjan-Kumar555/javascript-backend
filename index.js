// console.log("Ram is God !")
// console.log("God Will be Help us Always!")

require("dotenv").config();
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/mano', (req, res) => {
    res.send('Hello World! THis is Manoranjan Kumar')
})

app.get('/youtube', (req, res) => {
    res.send('Hi! How can i Help in You in YOUTUBE')
})

app.get('/html', (req, res) => {
    res.send('<h1>Hi! This is HTML Get Resphone</h1>')
})

app.get("/login", (req, res) =>{
    res.send("<h1>Hi! This is HTML Login Page Please Log in Here!</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})