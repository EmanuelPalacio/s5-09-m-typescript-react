import { Grid, Typography, Paper } from '@mui/material';

export default function Testimonials() {
	return (
		<section>
			<Grid
				container
				spacing={2}
				padding='100px 0 100px 0'
				justifyContent='center'
				sx={{ backgroundColor: '#E7E8EA' }}
			>
				<Grid item xs={12} margin='0 0 20px 0'>
					<Typography variant='h2' color='third.main' textAlign='center'>
						Testimonios
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<Paper
						sx={{
							height: 400,
							width: '100%',
							borderRadius: '20px',
						}}
					>
						<Grid
							container
							sx={{
								height: '100%',
								width: '100%',
								borderRadius: '20px',
								padding: '30px',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Grid item xs={12}>
								<Typography
									component='p'
									fontSize={20}
									color='text'
									borderLeft='2px solid #FC802C'
									paddingLeft='10px'
								>
									"Poder hacer un seguimiento diario de los hábitos que realizo
									me ha ayudado a mejorar mi vida de una manera maravillosa."
								</Typography>
							</Grid>
							<Grid item xs={2} textAlign='center'>
								<img
									src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668565240/ananda%20marga/home/testimonio1_fma5xn.png'
									alt='foto de perfil'
								/>
							</Grid>
							<Grid item xs={10}>
								<Typography fontWeight={800}>Kristina Watson</Typography>
								<Typography>Yoga</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<Paper
						sx={{
							height: 400,
							width: '100%',
							borderRadius: '20px',
						}}
					>
						<Grid
							container
							sx={{
								height: '100%',
								width: '100%',
								borderRadius: '20px',
								padding: '30px',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Grid item xs={12}>
								<Typography
									component='p'
									fontSize={20}
									color='text'
									borderLeft='2px solid #FC802C'
									paddingLeft='10px'
								>
									"Practicar el mindfulness a diario me ha ayudado a controlar
									mi ansiedad y a tomar las situaciones estresantes con mayor
									tranquilidad."
								</Typography>
							</Grid>
							<Grid item xs={2} textAlign='center'>
								<img
									src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668565240/ananda%20marga/home/testimonio2_bf1x7n.png'
									alt='foto de perfil'
								/>
							</Grid>
							<Grid item xs={10}>
								<Typography fontWeight={800}>Hector Howard</Typography>
								<Typography>Yoga</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</section>
	);
}
