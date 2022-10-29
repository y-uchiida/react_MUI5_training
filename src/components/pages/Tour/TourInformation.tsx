import React from 'react'
import { BottomNavigation, BottomNavigationAction, Box, Container, Paper, Typography } from '@mui/material'
import QuiltedImageList from '../../organisms/QuiltedImageList'
import CustomizedAccordion from '../../organisms/CustomizedAccordion'
import BasicModal from '../../organisms/BasicModal'

const TourInformation = () => {

	return (
		<>
			<Container sx={{ width: 900 }}>
				<Typography variant='h3' component='h1' marginTop={3}>
					Explore the World in Vegas
				</Typography>
				<Box marginTop={3} sx={{ display: 'flex' }}>
					<Box
						component='img'
						sx={{ height: 325 }}
						src='https://media.timeout.com/images/105124791/750/422/image.jpg'
					/>
					<QuiltedImageList />
				</Box>

				<Box>
					<Typography variant='h6' component='h4' marginTop={3}>
						About this ticket
					</Typography>
					<Typography variant='body1' component='p' marginTop={1}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a eligendi, doloremque exercitationem molestiae consectetur aspernatur? Nam, quaerat. Ducimus non ullam numquam, doloribus dolor odio debitis facilis, deleniti quaerat fuga deserunt, exercitationem soluta tempora praesentium ipsa delectus incidunt nostrum doloremque.
					</Typography>
				</Box>

				<Box>
					<Typography variant='h6' component='h4' marginTop={3}>
						Frequently Asked Questions
					</Typography>
					<Box marginTop={1}>
						<CustomizedAccordion></CustomizedAccordion>
					</Box>
				</Box>

				<Box marginBottom={10} />

				<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
					<BottomNavigation>
						<BasicModal />
					</BottomNavigation>
				</Paper>
			</Container>
		</>
	)
}

export default TourInformation
