import React from 'react'
import { Box, Container, Grid, Paper, Rating, Typography } from '@mui/material'
import { AccessTime } from '@mui/icons-material'

const TourCard = () => {
	return (
		<>
			<Paper elevation={3}>

				<Box component="img"
					sx={{ width: "100%", height: "5rem" }}
					src="https://images.unsplash.com/photo-1463695970743-ae65cca05743?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt="" />

				<Box paddingX={1}>
					<Typography variant="subtitle1" component="h2">
						Immerse into the Falls
					</Typography>

					<Box sx={{ display: "flex", alignItems: "center" }}>
						<AccessTime sx={{ width: 12.5 }} />
						<Typography variant='body2' component='p' marginLeft={0.5}>
							5 hours
						</Typography>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
						<Rating name='read-only' precision={0.5} size="small" value={4.5} readOnly />
						<Typography variant='body2' component='p' marginLeft={0.5}>
							4.5
						</Typography>
						<Typography variant='body2' component='p' marginLeft={1.5}>
							(655 reviews)
						</Typography>
					</Box>

					<Box>
						<Typography variant='h6' component='h3' marginLeft={0}>
							from C $147
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	)
}

export default TourCard
