const express = require("express")
const res = require("express/lib/response")

//console.log(express);

const app = express()

app.use(express.json())

//console.log(app);

//Route
//HTTP method
//  | endpoint  callback function
app.get("/", (req, res) => {
    res.send({message: "our first route"})
})//GET mapping


let bicycleSpin = 0

app.get("/spinthebike", (req, res) => {
    bicycleSpin += 1
    res.send({message: `spin is ${bicycleSpin}`})
})


app.get("/kickTheDinosour", (req, res) => {
    res.send({dinoSays: "Aw my nuts"})
})

app.get("/about", (req, res) => {
    res.send(`
        <h1>about</h1>
        <h3>This is my about page</h3>
    `)
})

// bat?adjective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query);

    res.send({message: `The bat is ${req.query.adjective}`})
}) //query string

// bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize})
})//path variable


app.post("/package", (req, res) => {
    res.send({message: req.body})
    console.log(req.body);
})

app.listen(8080) //defines port

