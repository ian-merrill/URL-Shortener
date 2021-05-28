import React, { useEffect, useState } from "react"
import Typography from "@material-ui/core/Typography"

export default function Redirect() {
	const [urlFound, setUrlFound] = useState(true)
	useEffect(async () => {
		const longUrl = await getLongUrl(window.location.href)
		if (longUrl) {
			window.location.href = longUrl
		} else {
			setUrlFound(false)
		}
	})

	async function getLongUrl(shortUrl) {
		try {
			const res = await fetch("http://localhost:8081/shortUrl", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ shortUrl }),
			})
			if (res.status === 200) {
				const { longUrl } = await res.json()
				return longUrl
			} else {
				return null
			}
		} catch (error) {
			console.error(error)
			return null
		}
	}

	if (urlFound) {
		return <div>Redirecting...</div>
	}
	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				top: "25%",
				transform: "translate(-50%, -50%)",
			}}
		>
			<Typography variant="h1">404 Page not found</Typography>
		</div>
	)
}
