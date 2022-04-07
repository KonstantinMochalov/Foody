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

export const Criteria = () => {
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
							defaultValue='any'>
							<FormControlLabel value='any' control={<Radio />} label='Any' />
							<FormControlLabel value='main course' control={<Radio />} label='Main course' />
							<FormControlLabel value='side dish' control={<Radio />} label='Side dish' />
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
							defaultValue='any'>
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
					{/* <FormControl>
						<RadioGroup
							// aria-labelledby='demo-controlled-radio-buttons-group'
							// name='controlled-radio-buttons-group'
							row
							defaultValue='none'>
							<FormControlLabel value='none' control={<Radio />} label='None' />
							<FormControlLabel value='dairy' control={<Radio />} label='Dairy' />
							<FormControlLabel value='egg' control={<Radio />} label='Egg' />
							<FormControlLabel value='gluten' control={<Radio />} label='Gluten' />
							<FormControlLabel value='peanut' control={<Radio />} label='Peanut' />
							<FormControlLabel value='seafood' control={<Radio />} label='Seafood' />
							<FormControlLabel value='nut' control={<Radio />} label='Tree Nut' />
							<FormControlLabel value='soy' control={<Radio />} label='Soy' />
						</RadioGroup>
					</FormControl> */}
					<FormGroup>
						<FormControlLabel control={<Checkbox />} label='Dairy' />
						<FormControlLabel control={<Checkbox />} label='Egg' />
						<FormControlLabel control={<Checkbox />} label='Gluten' />
						<FormControlLabel control={<Checkbox />} label='Peanut' />
						<FormControlLabel control={<Checkbox />} label='Seafood' />
						<FormControlLabel control={<Checkbox />} label='Tree Nut' />
						<FormControlLabel control={<Checkbox />} label='Soy' />
					</FormGroup>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
