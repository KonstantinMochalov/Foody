import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useLazyGetRecipeDetailsQuery } from '../api/getRecipeDetails'

interface Props {
	setSelectedRecipe: React.Dispatch<React.SetStateAction<number>>
    selectedRecipe: number
}



export const RecipeDetails = ({setSelectedRecipe, selectedRecipe}:Props) => {

    const [getInfo, info] = useLazyGetRecipeDetailsQuery()
    useEffect(() => {
      getInfo(selectedRecipe)
    }, )
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={info.data?.image}
          alt="recipe image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.data?.title}
          </Typography>
          {info.data?.extendedIngredients.map(item => (
          <Typography variant="body2" color="text.secondary">
            {item.original}
          </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      </Card>
  )
}
