import React from "react"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"

export const TitleBar = () => {
	return (
		<AppBar position="static">
			<Typography variant="h5" sx={{ margin: 2 }}>
				Foody
			</Typography>
		</AppBar>
	)
}
