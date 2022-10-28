import React from 'react'
import { Grid, Paper, Rating, Typography } from '@mui/material'
import TourCard from './TourCard'
import data from '../../data/tours.json'

const TourRanking = () => {
	return (
		<>
			{data.map(city => {
				return (
					<>
						<Typography variant='h4' component='h2' sx={{ mt: 5, mb: 3 }} key={city.id}>
							Top {city.name} Tours
						</Typography>
						<Grid container spacing={5}>
							{city.tours.map(tour => <Grid item xs={3}><TourCard tour={tour} key={tour.id}></TourCard></Grid>)}
						</Grid>
					</>
				)
			})}
		</>
	)
}

export default TourRanking
