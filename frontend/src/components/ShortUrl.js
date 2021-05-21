import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import React, { useEffect, useState } from "react"

const useStyles = makeStyles({
	paper: {
		padding: 20,
		margin: 5,
		maxWidth: 800,
		minWidth: 490,
	},
	btn: { height: 55 },
})

export default function ShortUrl({ url }) {
	const classes = useStyles()
	const [shortUrl, setShortUrl] = useState(null)
	const [copied, setCopied] = useState(false)
	useEffect(() => {
		console.log(url)
		setShortUrl(url)
	})

	if (shortUrl)
		return (
			<Grid item xs="auto">
				<Paper className={classes.paper}>
					<Grid container orientation="horizontal">
						<Grid item xs={10}>
							<TextField
								label="Short URL"
								disabled={true}
								variant="outlined"
								fullWidth={true}
								InputProps={{
									readOnly: true,
								}}
								value={shortUrl}
							></TextField>
						</Grid>
						<Grid item xs={2}>
							<Button
								fullWidth={true}
								className={classes.btn}
								variant="contained"
								onClick={() => {
									navigator.clipboard.writeText(shortUrl)
								}}
							>
								Copy
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		)
	return null
}
