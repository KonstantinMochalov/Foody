import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Details {
	id: number,
    title: string,
    image: string,
    extendedIngredients: {
        id: number
        name: string,
        image: string,
        original: string
    }[]
}
const cridentials = `?apiKey=${process.env.REACT_APP_API_KEY}`

export const recipeDetailsApi = createApi({
	reducerPath: 'recipeDetailsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes/' }),
	endpoints: (builder) => ({
		getRecipeDetails: builder.query<Details, number>({
			query: (id) => `${id}/information${cridentials}`,
		})
	}),
})

export const { useLazyGetRecipeDetailsQuery} = recipeDetailsApi