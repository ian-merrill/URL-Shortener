import React, { useEffect } from "react"

async function getLongUrl(shortUrl) {
	const res = await fetch("http://localhost:8081/shortUrl", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ shortUrl }),
	})
	const { longUrl } = await res.json()
	return longUrl
}

export default function Redirect() {
	useEffect(async () => {
		window.location.href = await getLongUrl(window.location.href)
	})
	return <div>Redirecting...</div>
}
