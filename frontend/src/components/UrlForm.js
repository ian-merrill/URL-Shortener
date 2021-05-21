import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
	paper: { padding: 20, margin: 5, maxWidth: 800, minWidth: 475 },
	urlInput: { width: "100%" },
	center: { textAlign: "center" },
})

export default function UrlForm() {
	const classes = useStyles()

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
							label="Url"
							variant="outlined"
							className={classes.urlInput}
						/>
					</Grid>
					<Grid item className={classes.center} xs={12}>
						<Button variant="outlined">Shorten</Button>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)
}
