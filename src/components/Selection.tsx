import { Avatar, Container, Typography, Grid, Button, Tooltip } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import thaiFlag from '../img/Thailand.png'
import vietnamFlag from '../img/Vietnam.png'
import mexicoFlag from '../img/Mexico.png'
import japanFlag from '../img/Japan.png'
import indiaFlag from '../img/India.jpg'
import chinaFlag from '../img/China.png'
import greeceFlag from '../img/Greece.png'

import React from 'react'
import { Criteria } from './Criteria'

export const Selection = () => {
	return (
		<Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
			<Typography align='center' variant='h5' sx={{ mb: 1 }}>
				Choose a country:
			</Typography>
			<Grid container direction='row' justifyContent='center' alignItems='center' spacing={5}>
				<Grid item>
					<Tooltip title='Thailand'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Thai Flag'
								src={thaiFlag}
								sx={{ width: '3rem', height: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Vietnam'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Vietnam Flag'
								src={vietnamFlag}
								sx={{ width: '3rem', height: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Mexico'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Mexican Flag'
								src={mexicoFlag}
								sx={{ width: '3rem', height: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Japan'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Japan Flag'
								src={japanFlag}
								sx={{ width: '3rem', height: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='India'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Indian Flag'
								src={indiaFlag}
								sx={{ width: '3rem', height: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='China'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Chainese Flag'
								src={chinaFlag}
								sx={{ width: '3rem', height: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title='Greese'>
						<Button sx={{ padding: 0 }}>
							<Avatar
								alt='Greek Flag'
								src={greeceFlag}
								sx={{ mwaxidth: '3rem', maxheight: '3rem', boxShadow: 2 }}
							/>
						</Button>
					</Tooltip>
				</Grid>
			</Grid>
			<Button variant='text' sx={{ mt: 3 }}>
				Any special requests?
			</Button>
        <Criteria/>    
		</Container>
	)
}
