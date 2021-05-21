import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React, { useEffect, useState } from "react"
import validator from "validator"

const useStyles = makeStyles({
	paper: { padding: 20, margin: 5, maxWidth: 800, minWidth: 490 },
	urlInput: { width: "100%" },
	center: { textAlign: "center" },
})

export default function UrlForm({ shorten }) {
	const classes = useStyles()
	const [url, setUrl] = useState("")
	const [error, setError] = useState(false)

	useEffect(() => {
		if (url) {
			if (!validator.isURL(url, { require_protocol: true })) {
				setError(true)
			} else {
				setError(false)
			}
		}
	}, [url])

	return (
		<Grid item xs="auto">
			<Paper className={classes.paper}>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12}>
						<Typography variant="h2">URL Shortener</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6">
							Enter a long URL and I will generate a shorter Url that goes to
							the same website
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							error={error}
							focused={false}
							helperText={error && "format: (https://www.website.com/long/url)"}
							label="Url"
							variant="outlined"
							className={classes.urlInput}
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>
					</Grid>
					<Grid item className={classes.center} xs={12}>
						<Button
							variant="outlined"
							disabled={error}
							onClick={() => shorten(url)}
						>
							Shorten
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)
}
