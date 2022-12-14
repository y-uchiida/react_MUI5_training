import React from 'react'
import { Box, createTheme, Paper, Rating, ThemeProvider, Typography } from '@mui/material'
import { AccessTime } from '@mui/icons-material'

/* Typography コンポーネントでbody3 バリアントを利用するため、
 * モジュール拡張でバリアントを追加しておく
 */
declare module '@mui/material/Typography' {
	/* interface は、 <MUIコンポーネント名>PropsVariantOverrides */
	interface TypographyPropsVariantOverrides {
		body3: true
	}
}

/* このコンポーネントに適用するテーマを作成する
 * MUIが用意しているデフォルトのテーマを読み込んでいるので、
 * それを上書きする形で記述できる
 */
const theme = createTheme({
	/* コンポーネントのスタイル設定を上書きする */
	components: {
		/* MUI に含まれる内容はMuiXXXXXの形式で名称を指定する */
		MuiTypography: {
			variants: [
				{
					/* Typography コンポーネントで body2 バリアントを指定した際のfont-size を11に上書きする */
					props: { variant: 'body2' },
					style: { fontSize: 11 }
				},
				{
					/* Typography コンポーネントで body3 バリアントを指定した際のfont-size を9に上書きする */
					props: { variant: 'body3' },
					style: { fontSize: 9 }
				},
			]
		}
	}
});

interface props {
	tour: {
		id: number,
		name: string,
		duration: number,
		rating: number,
		numberOfReviews: number,
		price: number,
		image: string
	}
}

const TourCard = ({ tour }: props) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Paper elevation={3}>
					<Box component="img"
						sx={{ width: "100%", height: "5rem" }}
						src={tour.image}
						alt="" />

					<Box paddingX={1}>
						<Typography variant="subtitle1" component="h2">
							{tour.name}
						</Typography>

						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTime sx={{ width: 12.5 }} />
							<Typography variant='body2' component='p' marginLeft={0.5}>
								{tour.duration} hours
							</Typography>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
							<Rating name='read-only' precision={0.5} size="small" value={4.5} readOnly />
							<Typography variant='body2' component='p' marginLeft={0.5}>
								{tour.rating}
							</Typography>
							<Typography variant='body3' component='p' marginLeft={1.5}>
								({tour.numberOfReviews} reviews)
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' component='h3' marginLeft={0}>
								from C ${tour.price}
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</>
	)
}

export default TourCard
