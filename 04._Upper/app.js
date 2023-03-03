//const express = require('express')
//10 regrets of node

import express from 'express'
const app = express()

//const jokes =  require('./util/jokes')

//import jokes from "./util/jokes.js"


const PORT = 8080
app.listen(PORT, (e) => {
    if(e){
        console.log(e);
    }
    console.log('server is runing on', PORT);
})