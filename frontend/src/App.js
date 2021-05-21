import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import UrlForm from "./components/UrlForm"
import ShortUrl from "./components/ShortUrl"
import Grid from "@material-ui/core/Grid"

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<div
					style={{
						position: "absolute",
						left: "50%",
						top: "25%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Grid container>
						<UrlForm />
						<ShortUrl />
					</Grid>
				</div>
			</CssBaseline>
		</ThemeProvider>
	)
}
