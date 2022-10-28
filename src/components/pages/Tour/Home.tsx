import { Container, Grid } from '@mui/material'
import React from 'react'
import TourCard from '../../molecules/TourCard'
import TourRanking from '../../molecules/TourRanking'
import SearchAppBar from '../../organisms/AppBar'

export const Home = () => {
	return (
		<>
			<SearchAppBar />
			<Container sx={{ mt: 5 }} >
				<TourRanking />
			</Container>
		</>
	)
}
