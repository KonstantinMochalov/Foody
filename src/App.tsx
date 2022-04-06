import { ThemeProvider } from "@emotion/react"
import React from "react"
import "./App.css"
import { TitleBar } from "./components/TitleBar"
import { Container } from "@mui/material"
import theme from './theme'
import { Slogan } from "./components/Slogan"

const App: React.FC = () => {	
	return (
		<ThemeProvider theme={theme}>
			<TitleBar/>
			<Container>
				<Slogan/>
			</Container>
		</ThemeProvider>
		
	)
}

export default App
