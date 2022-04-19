import React, { useEffect, useState } from 'react'
import './App.css'
import { TitleBar } from './components/TitleBar'
import { Alert, Button, Collapse, Container, Dialog, Divider, Modal } from '@mui/material'
import { Selection } from './components/Selection'
import { RecepieImgs } from './components/RecepieImgs'
import { useAppSelector } from './app/hooks'
import { RecipeDetails } from './components/RecipeDetails'
const App: React.FC = () => {
	const searchParams = useAppSelector((state) => state.searchParams)
	const [alertOpen, setAlertOpen] = useState(false)
	const [selectedRecipe, setSelectedRecipe] = useState<number>(0)

	return (
		<>
			<TitleBar />
			<Container
				sx={{
					mt: 0.5,
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Selection />
				<RecepieImgs setSelectedRecipe={setSelectedRecipe}/>
				<Dialog open={Boolean(selectedRecipe)} onClose={()=>setSelectedRecipe(0)}
						 >
					<>
					<RecipeDetails setSelectedRecipe={setSelectedRecipe} selectedRecipe={selectedRecipe}/>
					</>
				</Dialog>
			</Container>
			{alertOpen?<Alert  severity='error' sx={{position:"absolute", left: 2, bottom: 2}}>Choose a country</Alert>:null}
		</>
	)
}

export default App
