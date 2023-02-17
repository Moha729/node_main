const e = require('express');
const express = require('express')
const app = express()

const absoluteHTMLPathFrontpage =  __dirname+'/public/frontpage/frontpage.html';
const absoluteHTMLPathTanks = __dirname+'/public/tanks/tanks.html';

//express has a public folder that contains our static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(absoluteHTMLPathFrontpage)
})

app.get('/tanks', (req, res) => {
    res.sendFile(absoluteHTMLPathTanks)
})


const PORT = 8080
app.listen(PORT, (error)=>{
    console.log(error);
    if(error){
        console.log(error);
        return
    }
    console.log("Server is running on port", PORT);
})

//falsy and false are just false also null and undefined