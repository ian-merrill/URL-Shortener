import { saveUrl, createShortUrl, getLongUrl } from "../src/logic.mjs"
import { Url } from "../src/model.mjs"

afterEach(async () => {
	await Url.destroy({ where: {}, truncate: true })
})

test("saveUrl should return a shortUrl", async () => {
	expect(
		await saveUrl(
			"https://www.amazon.com/LG-34WN80C-B-inch-Connectivity-Compatibility/dp/B07YGZ7C1K/ref=sr_1_8?crid=2M7FX0FXOMA4&dchild=1&keywords=widescreen+monitor&qid=1621472006&s=electronics&sprefix=widescreen%2Celectronics%2C209&sr=1-8"
		)
	).toMatch(/^http:\/\/localhost:8080\/?\/\w+/)
})

test("saveUrl should return false for invalid urls", async () => {
	expect(await saveUrl("random stuff")).toBe(false)
	expect(await saveUrl("google.com/sasdfkaf/asdfas")).toBe(false)
})

test("saveUrl saves new Url records to the database", async () => {
	await saveUrl(
		"https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findOrCreate"
	)
	await saveUrl("https://www.npmjs.com/package/validator")
	await saveUrl(
		"https://www.amazon.com/LG-34WN80C-B-inch-Connectivity-Compatibility/dp/B07YGZ7C1K/ref=sr_1_8?crid=2M7FX0FXOMA4&dchild=1&keywords=widescreen+monitor&qid=1621472006&s=electronics&sprefix=widescreen%2Celectronics%2C209&sr=1-8"
	)
	let records = await Url.findAll()
	expect(records.length).toBe(3)
})

test("saveUrl saves only one record per url saved to the database", async () => {
	await saveUrl(
		"https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findOrCreate"
	)
	await saveUrl(
		"https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findOrCreate"
	)
	let record = await Url.findAll()
	expect(record).toBeTruthy()
	expect(record.length).toBe(1)
})

test("create short url should give unique url", () => {
	expect(createShortUrl()).toMatch(/^http:\/\/localhost:8080\/?\/\w+/)
	let oneHundredThousandUrls = []
	for (let i = 0; i < 100000; i++) {
		oneHundredThousandUrls.push(createShortUrl())
	}
	const set = new Set(oneHundredThousandUrls)
	expect(set.size).toBe(100000)
})

test("getLongUrl returns long url for shortUrl and false if it doesn't exist", async () => {
	const shortUrl = await saveUrl("https://www.npmjs.com/package/validator")
	expect(await getLongUrl(shortUrl)).toBe(
		"https://www.npmjs.com/package/validator"
	)
	expect(await getLongUrl("http://localhost:8080/nonsense")).toBe(false)
})
