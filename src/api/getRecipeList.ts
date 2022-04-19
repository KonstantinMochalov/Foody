import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface RecipeList {
	recipes: [{ id: number; title: string; image: string }]
	results: [{ id: number; title: string; image: string }]
}
interface SearchedRecipeList {}

export const recipeApi = createApi({
	reducerPath: 'recipeApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes/' }),
	endpoints: (builder) => ({
		getRecipeList: builder.query<RecipeList, string>({
			query: (params) => `${params}`,
		})
	}),
})

export const { useLazyGetRecipeListQuery} = recipeApi
