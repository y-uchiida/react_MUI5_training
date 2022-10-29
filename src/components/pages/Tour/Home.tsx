import React from 'react'
import { Container } from '@mui/material'
import TourRanking from '../../molecules/TourRanking'
import SearchAppBar from '../../organisms/AppBar'

export const Home = () => {
	return (
		<>
			<Container sx={{ mt: 5 }} >
				<TourRanking />
			</Container>
		</>
	)
}
