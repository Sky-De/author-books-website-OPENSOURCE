import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import '../../index.css';
import AuthorPicture from '../ImageDisplay/AuthorPicture';

export default function AuthorBio() {
	return (
		<>
			<div
				className="homepage"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					height: '100vh',
					paddingTop: '6rem',
				}}
			>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
					}}
				>
					<AuthorPicture />
				</Box>
				<Box
					sx={{
						display: 'block',
						width: '100vw',
						marginRight: { xs: 1, sm: 10, md: 15, lg: 24 },
						marginTop: { sm: 5, lg: 0 },
						marginBottom: { md: 15, lg: 9 },
						ml: { sm: 5, md: 0 },
					}}
				>
					<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
						<AuthorPicture />
					</Box>
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							marginLeft: { xs: 2, sm: 0 },
							textAlign: 'left',
							letterSpacing: '5px',
							fontFamily: 'inter',
							fontSize: { xs: 36, sm: 48, lg: 60 },
						}}
						gutterBottom
					>
						AUTHOR
					</Typography>
					<Typography
						variant="body1"
						sx={{
							display: 'block',
							textAlign: 'left',
							marginLeft: { xs: 2, sm: 0 },
							alignSelf: 'center',
							width: { xs: '100%', sm: '100%', xl: '80%' },
							marginBottom: 3,
							fontFamily: 'inter',
							fontSize: { xs: 14, lg: 16 },
							color: '#72320A',
						}}
						gutterBottom
					>
						T.L. Griffin, a writer with over two decades of nursing experience,
						draws inspiration from the remarkable women who have influenced her
						life. She aspires to inspire, uplift, and become a positive role
						model through her heartfelt words, making the world a brighter
						place.
					</Typography>

					<Box
						sx={{
							display: 'block',
							width: { xs: '10rem', sm: '11rem', md: '11rem' },
							fontFamily: 'inter',
							alignItems: 'center',
							marginLeft: { xs: 2, sm: 0 },
							justifyContent: 'center',
						}}
					>
						<Button
							variant="contained"
							href="/About"
							color="info"
							sx={{
								transition:
									'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
								':hover': {
									boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
									animation: 'shake 0.5s',
								},
								display: 'block',
								width: '100%',
								maxWidth: '100%',
								fontFamily: 'inter',
								fontSize: '15px',
								letterSpacing: '3px',
								textAlign: 'center',
								marginBottom: { xs: 5, sm: 0 },
							}}
						>
							Read More
						</Button>
					</Box>
				</Box>
			</div>
		</>
	);
}
