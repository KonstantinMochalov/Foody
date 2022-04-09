import React, { useEffect } from 'react'
import './App.css'
import { TitleBar } from './components/TitleBar'
import { Button, Container, Divider } from '@mui/material'
import { Selection } from './components/Selection'
import { RecepieImgs } from './components/RecepieImgs'
import { getRecipes } from './api/getRequests'
import { useAppSelector } from './app/hooks'

const App: React.FC = () => {
	const searchParams= useAppSelector((state)=>state.searchParams)
	const search = () =>{
		console.log(getRecipes(searchParams))
	}
	useEffect(() => {
		search()
	}, [])
	
	return (
	<>
			<TitleBar />
			<Container sx={{ mt: 0.5,  display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
				<Selection />
				<Button variant='contained' sx={{maxWidth:"10rem", mt: 2}} onClick={search}>Search</Button>
				<RecepieImgs/>
			</Container>
			
		</>
	)
}

export default App
