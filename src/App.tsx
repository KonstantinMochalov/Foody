import React from 'react'
import './App.css'
import { TitleBar } from './components/TitleBar'
import { Button, Container, Divider } from '@mui/material'
import { Selection } from './components/Selection'
import { RecepieImgs } from './components/RecepieImgs'

const App: React.FC = () => {
	return (
	<>
			<TitleBar />
			<Container sx={{ mt: 0.5,  display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
				<Selection />
				<Button variant='contained' sx={{maxWidth:"10rem", mt: 2}}>Search</Button>
				<RecepieImgs/>
			</Container>
			
		</>
	)
}

export default App
