import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Redirect from "./components/Redirect"
import ShortUrl from "./components/ShortUrl"
import UrlForm from "./components/UrlForm"

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
})

export default function App() {
	const [shortUrl, setShortUrl] = useState(null)

	async function fetchShortUrl(url) {
		const res = await fetch("http://localhost:8081/url", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ url }),
		})
		const { shortUrl } = await res.json()
		setShortUrl(shortUrl)
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Router>
					<Switch>
						<Route exact path="/">
							<div
								style={{
									position: "absolute",
									left: "50%",
									top: "25%",
									transform: "translate(-50%, -50%)",
								}}
							>
								<Grid container direction="column">
									<UrlForm shorten={fetchShortUrl} />
									<ShortUrl url={shortUrl} />
								</Grid>
							</div>
						</Route>
						<Route path="/:key">
							<Redirect />
						</Route>
					</Switch>
				</Router>
			</CssBaseline>
		</ThemeProvider>
	)
}
