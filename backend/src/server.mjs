import express from "express"
import { saveUrl, getLongUrl } from "./logic.mjs"
const app = express()

app.use(express.json())

app.post("/longUrl", async (req, res) => {
	try {
		if (req?.body?.url) {
			const shortUrl = await saveUrl(req.body.url)
			if (shortUrl) {
				res.status(200).send({ shortUrl })
			} else {
				res.status(400).send("invalid url, prefix required (https://)")
			}
		} else {
			res.status(400).send()
		}
	} catch (error) {
		console.log(error.message)
		res.status(500).send()
	}
})

app.post("/shortUrl", async (req, res) => {
	try {
		if (req?.body?.shortUrl) {
			const longUrl = await getLongUrl(req.body.shortUrl)
			if (longUrl) {
				res.status(200).send({ longUrl })
			} else {
				res
					.status(400)
					.send(`no redirect found for given short url: ${req.body.shortUrl}`)
			}
		} else {
			res.status(400)
		}
	} catch (error) {
		console.log(error.message)
		res.status(500).send()
	}
})

app.listen(8081, () => {
	console.log(`backend listening at http://localhost:${8081}`)
})

export default app
