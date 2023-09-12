import React from 'react';
import background from '../Images/background.jpg';
import { Box, Button, Typography } from '@mui/material';
import '../index.css';
import AuthorPicture from './AuthorPicture';

// const styles = {
// 	backgroundImage: `url(${background})`,
// 	backgroundSize: 'cover',
// 	backgroundPosition: 'center',
// 	backgroundRepeat: 'no-repeat',
// 	height: '100vh',
// 	width: '100vw',
// };

export default function Homepage() {
	//Standard is 1440
	console.log(window.innerWidth);
	return (
		<div
			className="homepage"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				height: '100vh',
			}}
		>
			<AuthorPicture />
			<Box style={{ width: '30%', marginRight: '14%' }}>
				<Typography variant="h3" sx={{ display: { xs: 'none', md: 'flex' },fontFamily: 'Playfair Display'}}>
					Spiritual Author
				</Typography>
				<Typography
					variant="body1"
					sx={{
						display: { xs: 'none', md: 'flex' },
						textAlign: 'left',
						alignSelf: 'center',
						marginBottom: 3,
						fontFamily: 'inter',
					}}
					gutterBottom
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Typography>
				{/* Large Screens (1200px+) */}
				<div class="animate__animated animate__headShake animate__delay-5s	5s">
					<Button
						variant="outlined"
						color="warning"
						href="#about"
						onClick={() => {
							alert('click');
						}}
						sx={{
							display: { xs: 'none', md: 'flex', lg: 'flex' },
							width: '15rem',
							fontFamily: 'inter',
						}}
					>
						Learn More
					</Button>

					{/* Medium Screens (900px+) 
					<Button
						variant="outlined"
						href="#about"
						color="warning"
						onClick={() => {
							alert('click');
						}}
						sx={{
							display: { xs: 'none', md: 'flex', lg: 'none' },
							width: '15rem',
						}}
					>
						Learn More
					</Button> */}

					{/* Smaller Screens */}
					<Typography
						variant="body1"
						sx={{
							display: { xs: 'flex', md: 'none' },
							textAlign: 'center',
							fontFamily: 'inter',
							// fontSize: { xs: '14px', sm: '16px', md: '18px' }
						}}
						gutterBottom
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<Button
						variant="outlined"
						href="#about"
						color="warning"
						onClick={() => {
							alert('click');
						}}
						sx={{
							display: { xs: 'flex', md: 'none', lg: 'none' },
							width: '15rem',
						}}
					>
						Learn More
					</Button>
				</div>
			</Box>
		</div>
	);
}
