import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import searchParamsReducer from '../features/searchParams'

// import thunk from 'redux-thunk'


export const store = configureStore({
  reducer: {
    searchParams: searchParamsReducer
  },
  // middleware:[thunk]
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>