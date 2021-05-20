import validator from "validator"
import short from "short-uuid"
import { Url } from "./model.mjs"

const generator = short()

export function createShortUrl() {
	return `http://localhost:8080/${generator.new()}`
}

export async function getLongUrl(shortUrl) {
	const queryRes = await Url.findOne({ where: { shortUrl } })
	return queryRes?.dataValues?.longUrl || false
}

export async function saveUrl(url) {
	if (validator.isURL(url, { require_protocol: true })) {
		const newUrl = await Url.findOrCreate({
			where: { longUrl: url },
			defaults: { longUrl: url, shortUrl: createShortUrl() },
		})
		return newUrl[0].dataValues.shortUrl
	} else {
		return false
	}
}
