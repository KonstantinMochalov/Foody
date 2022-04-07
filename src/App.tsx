import React from 'react'
import './App.css'
import { TitleBar } from './components/TitleBar'
import { Container } from '@mui/material'
import { Slogan } from './components/Slogan'
import { Selection } from './components/Selection'
import { RecepieImgs } from './components/RecepieImgs'

const App: React.FC = () => {
	return (
		<div>
			<TitleBar />
			<Container sx={{ mt: 0.5 }}>
				<Slogan />
				<Selection />
				<RecepieImgs/>
			</Container>
			
		</div>
	)
}

export default App
