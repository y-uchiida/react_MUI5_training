import { Container, Grid } from '@mui/material'
import React from 'react'
import TourCard from '../../molecules/TourCard'
import TourRanking from '../../molecules/TourRanking'

export const Home = () => {
	return (
		<>
			<div>Tour Recommendation</div>
			<Container>
				<TourRanking />
			</Container>
		</>
	)
}
