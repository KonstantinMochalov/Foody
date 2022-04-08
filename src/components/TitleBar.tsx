import React from "react"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"
import { Slogan } from "./Slogan"

export const TitleBar = () => {
	return (
		<AppBar position="static">
			<Typography variant="h5" sx={{ mt: 1.5, ml:1.5  }}>
				Foody
			</Typography>
			<Slogan/>
		</AppBar>
	)
}
