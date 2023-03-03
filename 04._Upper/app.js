//const express = require('express')
//10 regrets of node

import express from 'express'
const app = express()

//const jokes =  require('./util/jokes')

//import jokes from "./util/jokes.js"

import path from 'path'
//console.log(path);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'))
})

app.get('/irlquests', (req, res) => {
    res.sendFile(path.resolve('public', 'pages', 'IRLQuests', 'IRLQuests.html'))
})


const PORT = 8080
app.listen(PORT, (e) => {
    if(e){
        console.log(e);
    }
    console.log('server is runing on', PORT);
})