import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Divider, Stack, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import { StyledToolbar } from '../../Style/Styling';
import BooksButton from '../Books/BooksButton';

export default function MobileFooter({toolbarColor}) {
	// Auth0 functionality
	const { user, isLoading } = useAuth0();
	return (
		<footer>
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<AppBar position="static">
					<StyledToolbar style={{ backgroundColor: toolbarColor }}>
						<Stack direction="column">
							<Typography
								sx={{
									color: '#72320A',
									display: 'inherit',
									justifyContent: 'center',
									fontFamily: 'Playfair Display',
									fontWeight: 700,
									fontSize: '20px',
									letterSpacing: '.3rem',
								}}
							>
								T.L Griffin
							</Typography>
							<Stack
								direction="row"
								spacing={0}
								flexWrap="wrap"
								sx={{ alignItems: 'center', justifyContent: 'center' }}
							>
								<Button
									sx={{
										fontFamily: 'inter',
										color: '#72320A',
										margin: '1rem',
									}}
									href="/"
								>
									Home
								</Button>
								<Button
									sx={{
										fontFamily: 'inter',
										color: '#72320A',
										margin: '1rem',
									}}
									href="/About"
								>
									About
								</Button>
								<BooksButton />
								<SubscribeButton />
								{!isLoading && !user && <LoginButton />}
								{!isLoading && user && <LogoutButton />}
							</Stack>
							<Divider sx={{ width: '100vw' }} />
							<Typography
								sx={{
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									color:"#72320A",
									fontSize: '14px',
									marginTop: 1,
								}}
							>
								© {new Date().getFullYear()} Tisha Griffin. All Rights Reserved.
							</Typography>
							{/* <Typography
								sx={{
									color: 'black',
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									marginRight: 3.6,
									fontSize: '12px',
									fontStyle: 'oblique',
								}}
							>
								Web Design by:{' '}
								<a
									style={{
										textDecoration: 'none',
										paddingLeft: '2px',
										paddingRight: '2px',
									}}
									href="https://wingfieldadvertising.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Corbriyana Wingfield.{' '}
								</a>
							</Typography>
							<Typography
								sx={{
									color: 'black',
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									marginLeft: 8.8,
									fontSize: '12px',
									fontStyle: 'oblique',
								}}
							>
								Developers:{' '}
								<a
									style={{
										textDecoration: 'none',
										paddingLeft: '2px',
										paddingRight: '2px',
									}}
									href="https://christophersmithjr.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{' '}
									Christopher Smith Jr.
								</a>{' '}
								and
								<a
									style={{
										textDecoration: 'none',
										paddingLeft: '2px',
										paddingRight: '2px',
									}}
									href="https://brockabloomquist.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{' '}
									Brock Bloomquist.
								</a>
							</Typography> */}
						</Stack>
					</StyledToolbar>
				</AppBar>
			</Box>
		</footer>
	);
}
