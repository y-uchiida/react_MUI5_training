import { Container, Grid } from '@mui/material'
import React from 'react'
import TourCard from '../../molecules/TourCard'

export const Home = () => {
	return (
		<>
			<div>Tour Recommendation</div>
			<Container>
				<Grid container spacing={5}>
					<TourCard></TourCard>
					<TourCard></TourCard>
					<TourCard></TourCard>
					<TourCard></TourCard>
				</Grid>
			</Container>
		</>
	)
}
