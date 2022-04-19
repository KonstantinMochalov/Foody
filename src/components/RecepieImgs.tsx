import { Alert, Button, ImageList, ImageListItem, ImageListItemBar, Snackbar, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLazyGetRecipeListQuery } from '../api/getRecipeList'
import { getSearchString } from '../app/getSearchString'
import { useAppSelector } from '../app/hooks'

interface Props {
	setSelectedRecipe: React.Dispatch<React.SetStateAction<number>>
}

export const RecepieImgs = ({ setSelectedRecipe }: Props) => {
	const searchParams = useAppSelector((state) => state.searchParams)
	interface QueryResultItem {
		id: number
		title: string
		image: string
	}
	const [itemData, setItemData] = useState<QueryResultItem[]>([])
	const imgSize = '312x231'
	const [alertOpen, setAlertOpen] = useState(false)
	const handleClose = (event?:React.SyntheticEvent | Event, reason?:string) => {
		if (reason === 'clickaway') return
		setAlertOpen(false)
	}

	useEffect(() => {
		getRecipes(getSearchString(searchParams)).then((getRecipesResult) => {
			if (getRecipesResult.data?.recipes) setItemData(getRecipesResult.data?.recipes)
		})
		// eslint-disable-next-line
	},[])
	

	const [getRecipes] = useLazyGetRecipeListQuery()
	const handleSearch = () => {
		getRecipes(getSearchString(searchParams)).then((getRecipesResult) => {
			if (searchParams.country === 'any') return setAlertOpen(true)
			if (getRecipesResult.data?.results) setItemData(getRecipesResult.data?.results)
		})
	}

	return (
		<>
			<Button variant='contained' sx={{ maxWidth: '10rem', mt: 2 }} onClick={handleSearch}>
				Search
			</Button>
			<ImageList
				sx={{
					width: '95%',
					display: 'flex',
					flex: 1,
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					justifyContent: 'center',
				}}>
				{itemData.map((item) => (
					<ImageListItem key={item.id} onClick={() => setSelectedRecipe(item.id)}>
						<Tooltip title={item.title} followCursor={true}>
							<img
								src={`https://spoonacular.com/recipeImages/${item.id}-${imgSize}.jpg`}
								srcSet={`https://spoonacular.com/recipeImages/${item.id}-${imgSize}.jpg 2X`}
								alt={item.title}
								loading='lazy'
							/>
						</Tooltip>
						<ImageListItemBar title={item.title} />
					</ImageListItem>
				))}
			</ImageList>

			<Snackbar open={alertOpen} autoHideDuration={5000} onClose={handleClose}>
				<Alert severity='error' onClose={handleClose}>
					Choose a country
				</Alert>
			</Snackbar>
		</>
	)
}
