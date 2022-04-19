import { Avatar, Container, Typography, Grid, Button, Tooltip, Paper } from '@mui/material'
import thaiFlag from '../img/Thailand.png'
import vietnamFlag from '../img/Vietnam.png'
import mexicoFlag from '../img/Mexico.png'
import japanFlag from '../img/Japan.png'
import indiaFlag from '../img/India.jpg'
import chinaFlag from '../img/China.png'
import greeceFlag from '../img/Greece.png'
import React, { useState } from 'react'
import { Criteria } from './Criteria'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setParams } from '../features/searchParams'

export const Selection = () => {
	const [specialsOpen, setSpecialsOpen] = useState(false)
	const searchParams = useAppSelector((state) => state.searchParams)

	const dispatch = useAppDispatch()

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 1,
			}}>
			<Paper sx={{ mb: 2 }}>
				<Typography align='center' variant='h5' sx={{ m: 0.5, ml: 1, mr: 1 }}>
					Choose a country:
				</Typography>
			</Paper>
			<Grid container direction='row' justifyContent='center' alignItems='center' spacing={1}>
				<Grid item>
					<Tooltip title='Thailand'>
						<Button
							variant={searchParams.country === 'thai' ? 'contained' : 'text'}
							sx={{ padding: 0, backgroundColor: 'primary', aspectRatio: '1/1' }}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'thai' }))}>
							<Avatar
								alt='Thai Flag'
								src={thaiFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Vietnam'>
						<Button
							variant={searchParams.country === 'vietnamese' ? 'contained' : 'text'}
							sx={{ padding: 0, aspectRatio: '1/1' }}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'vietnamese' }))}>
							<Avatar
								alt='Vietnam Flag'
								src={vietnamFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Mexico'>
						<Button
							variant={searchParams.country === 'mexican' ? 'contained' : 'text'}
							sx={{ padding: 0, aspectRatio: '1/1' }}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'mexican' }))}>
							<Avatar
								alt='Mexican Flag'
								src={mexicoFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Japan'>
						<Button
							variant={searchParams.country === 'japanese' ? 'contained' : 'text'}
							sx={{ padding: 0, aspectRatio: '1/1' }}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'japanese' }))}>
							<Avatar
								alt='Japan Flag'
								src={japanFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='India'>
						<Button
							variant={searchParams.country === 'indian' ? 'contained' : 'text'}
							sx={{ padding: 0, aspectRatio: '1/1' }}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'indian' }))}>
							<Avatar
								alt='Indian Flag'
								src={indiaFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='China'>
						<Button
							variant={searchParams.country === 'chinese' ? 'contained' : 'text'}
							sx={{ padding: 0, aspectRatio: '1/1' }}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'chinese' }))}>
							<Avatar
								alt='Chainese Flag'
								src={chinaFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Greese'>
						<Button
							sx={{ padding: 0, aspectRatio: '1/1' }}
							variant={searchParams.country === 'greek' ? 'contained' : 'text'}
							onClick={() => dispatch(setParams({ ...searchParams, country: 'greek' }))}>
							<Avatar
								alt='Greek Flag'
								src={greeceFlag}
								sx={{ maxwidth: '3rem', maxheight: '3rem', boxShadow: 3 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
			</Grid>
			<Button variant='text' sx={{ mt: 3 }} onClick={() => setSpecialsOpen(!specialsOpen)}>
				{!specialsOpen ? 'Any special requests?' : 'Close'}
			</Button>
			{specialsOpen ? <Criteria /> : null}
		</Container>
	)
}
