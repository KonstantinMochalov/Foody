import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setParams } from '../features/searchParams'

export const Criteria = () => {
	const dispatch = useAppDispatch()
	const searchParams = useAppSelector((state) => state.searchParams)
	interface Restrictions {
		dairy: Boolean,
		egg: Boolean,
		gluten: Boolean,
		peanut: Boolean,
		seafood: Boolean,
		treenut: Boolean,
		soy: Boolean,
	}

	const handleMealChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setParams({ ...searchParams, meal: e.target.value }))
	const handleDietChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setParams({ ...searchParams, diet: e.target.value }))
	const [restrictions, setrestRictions] = useState<Restrictions>({
		dairy: false,
		egg: false,
		gluten: false,
		peanut: false,
		seafood: false,
		treenut: false,
		soy: false})
	const handleRestrictionChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
		let k: keyof Restrictions
		for ( k in restrictions){
			if (k == e.target.value){
				restrictions[k]=!restrictions[k]
				//sets params as same, exept for restrictins, sets restriction as same, but adds k as a last element
				if (restrictions[k]) dispatch(setParams({...searchParams, restrictions: [...searchParams.restrictions, k]}))
				if (!restrictions[k]) {
					//sets restrictions as a result of filter
					dispatch(setParams({...searchParams, restrictions: searchParams.restrictions.filter(i=>i!==k)}))
				}
				console.log(searchParams)
			}
		}
	}
		

	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls='meal-panel-content'
					id='meal-panel-header'>
					<Typography alignSelf='center'>Meal type</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ flexGrow: 1 }}>
					<FormControl>
						<RadioGroup
							// aria-labelledby='demo-controlled-radio-buttons-group'
							// name='controlled-radio-buttons-group'
							row
							defaultValue='any'
							onChange={handleMealChange}>
							<FormControlLabel value='any' control={<Radio />} label='Any' />
							<FormControlLabel value='main+course' control={<Radio />} label='Main course' />
							<FormControlLabel value='side+dish' control={<Radio />} label='Side dish' />
							<FormControlLabel value='dessert' control={<Radio />} label='Dessert' />
							<FormControlLabel value='appetizer' control={<Radio />} label='Appetizer' />
							<FormControlLabel value='salad' control={<Radio />} label='Salad' />
							<FormControlLabel value='breakfast' control={<Radio />} label='Breakfast' />
							<FormControlLabel value='soup' control={<Radio />} label='Soup' />
							<FormControlLabel value='beverage' control={<Radio />} label='Beverage' />
						</RadioGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls='diet-panel-content'
					id='diet-panel-header'>
					<Typography alignSelf='center'>Diet type</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ flexGrow: 1 }}>
					<FormControl>
						<RadioGroup
							// aria-labelledby='demo-controlled-radio-buttons-group'
							// name='controlled-radio-buttons-group'
							row
							defaultValue='any'
							onChange={handleDietChange}>
							<FormControlLabel value='any' control={<Radio />} label='Any' />
							<FormControlLabel value='ketogenic' control={<Radio />} label='Ketogenic' />
							<FormControlLabel value='vegitarian' control={<Radio />} label='Vegetarian' />
							<FormControlLabel value='vegan' control={<Radio />} label='Vegan' />
							<FormControlLabel value='paleo' control={<Radio />} label='Paleo' />
							<FormControlLabel value='pescetarian' control={<Radio />} label='Pescetarian' />
						</RadioGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls='restriction-panel-content'
					id='restriction-panel-header'>
					<Typography alignSelf='center'>Dietary restriction</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ flexGrow: 1 }}>
					<FormGroup
						onChange={handleRestrictionChange}>
						<FormControlLabel control={<Checkbox value='dairy' />} label='Dairy' />
						<FormControlLabel control={<Checkbox value='egg' />} label='Egg' />
						<FormControlLabel control={<Checkbox value='gluten' />} label='Gluten' />
						<FormControlLabel control={<Checkbox value='peanut' />} label='Peanut' />
						<FormControlLabel control={<Checkbox value='seafood' />} label='Seafood' />
						<FormControlLabel control={<Checkbox value='treenut' />} label='Tree Nut' />
						<FormControlLabel control={<Checkbox value='soy' />} label='Soy' />
					</FormGroup>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
