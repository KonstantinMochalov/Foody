import React, { useState } from 'react'
import './App.css'
import { TitleBar } from './components/TitleBar'
import { Alert, Container, Dialog } from '@mui/material'
import { Selection } from './components/Selection'
import { RecepieImgs } from './components/RecepieImgs'
import { RecipeDetails } from './components/RecipeDetails'
const App: React.FC = () => {
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
			
		</>
	)
}

export default App
