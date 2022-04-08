import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Params {
	country: string
	meal: string
	diet: string
	restrictions: string[]
}
const initialState: Params = {
	country: 'any',
	meal: 'any',
	diet: 'any',
	restrictions: [],
}

const searchPatamsSlice = createSlice({
	name: 'searchParams',
	initialState,
	reducers: {
		setParams(state: Params, action: PayloadAction<Params>) {
			console.log(action.payload);
			
			return action.payload
		},
	},
})

export const {setParams} = searchPatamsSlice.actions

export default searchPatamsSlice.reducer