const express = require("express")
const app = new express()
const port = 8080

app.use(express.json())

app.get("/accreditamento", (req, res) => {
    res.json({nome: "marco", cognome: "gaioni"})
})

app.post("/path", (req, res) => {

})

app.put("path", (req, res) => {

})

app.post("/path", (req, res) => {

})

app.listen(port, () => console.log(`app listening on port ${port}`))