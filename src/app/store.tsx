import { configureStore } from '@reduxjs/toolkit'
import { recipeDetailsApi } from '../api/getRecipeDetails'
import { recipeApi } from '../api/getRecipeList'
import searchParamsReducer from '../features/searchParams'

// import thunk from 'redux-thunk'


export const store = configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    [recipeDetailsApi.reducerPath]: recipeDetailsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( recipeApi.middleware, recipeDetailsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>