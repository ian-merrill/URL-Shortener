import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
	paper: {
		padding: 20,
		margin: 5,
		maxWidth: 800,
		minWidth: 475,
	},
	textField: {},
	btn: { height: 55 },
})

export default function ShortUrl({ url }) {
	const classes = useStyles()
	const [shortUrl, setShortUrl] = useState(null)
	const [copied, setCopied] = useState(false)
	useEffect(() => {
		setShortUrl(url)
	})

	if (true)
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
								style={{ color: copied ? "blue" : "red" }}
								InputProps={{
									readOnly: true,
								}}
								value={`http://localhost:8080/1UPCBwQGQicmfviYiLfZRX`}
							></TextField>
						</Grid>
						<Grid item xs={2}>
							<Button
								fullWidth={true}
								className={classes.btn}
								variant="contained"
								onClick={() => {
									navigator.clipboard.writeText(
										"http://localhost:8080/1UPCBwQGQicmfviYiLfZRX"
									)
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
