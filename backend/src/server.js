import express from "express"
import logic from "./logic.js"
const app = express()

// app.get("/", (req, res) => {
// 	res.send("hello world")
// })

app.get("/url", (req, res) => {
	res.send(`i'll give you the redirect for short url: ${req}`)
})

app.post("/url", (req, res) => {
	res.send(`good for you you sent me ${req}`)
})

app.listen(8081, () => {
	console.log(`Example app listening at http://localhost:${8081}`)
})
