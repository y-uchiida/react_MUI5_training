import React from 'react'
import { Grid, Paper, Rating } from '@mui/material'
import TourCard from './TourCard'


const TourRanking = () => {
	return (
		<>
			<Grid container spacing={5}>
				<Grid item xs={3}>
					<TourCard></TourCard>
				</Grid>
				<Grid item xs={3}>
					<TourCard></TourCard>
				</Grid>
				<Grid item xs={3}>
					<TourCard></TourCard>
				</Grid>
				<Grid item xs={3}>
					<TourCard></TourCard>
				</Grid>
			</Grid>
		</>
	)
}

export default TourRanking
