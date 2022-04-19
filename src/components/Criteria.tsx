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
import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setParams } from '../features/searchParams'

export const Criteria = () => {
	const dispatch = useAppDispatch()
	const searchParams = useAppSelector((state) => state.searchParams)

	const handleMealChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setParams({ ...searchParams, meal: e.target.value }))
	const handleDietChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setParams({ ...searchParams, diet: e.target.value }))

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			dispatch(setParams({...searchParams, restrictions: [...searchParams.restrictions, e.target.value]}))
		} else {
			dispatch(setParams({...searchParams, restrictions: searchParams.restrictions.filter(i=>i!==e.target.value)}))
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
						onChange={handleCheckboxChange}>
						<FormControlLabel control={<Checkbox value='dairy' />} label='Dairy' />
						<FormControlLabel control={<Checkbox value='egg' />} label='Egg' />
						<FormControlLabel control={<Checkbox value='gluten' />} label='Gluten' />
						<FormControlLabel control={<Checkbox value='peanut' />} label='Peanut' />
						<FormControlLabel control={<Checkbox value='seafood' />} label='Seafood' />
						<FormControlLabel control={<Checkbox value='tree+nut' />} label='Tree Nut' />
						<FormControlLabel control={<Checkbox value='soy' />} label='Soy' />
					</FormGroup>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
