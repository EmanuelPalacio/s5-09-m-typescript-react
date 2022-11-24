import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { Typography, Grid } from '@mui/material';
import GlobalButton from '../../../components/GlobalButton';
import DeletableChips from './DeletableChips';

export default function FormProfileWithUserInfo2() {
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<Grid container height='30%'>
			<Grid item xs={3}>
				<Typography fontSize='1.5rem'>
					<CoronavirusOutlinedIcon sx={{ color: 'secondary.main' }} />
					Hábitos
				</Typography>
				;
			</Grid>
			<Grid item xs={9}>
				<Typography fontSize='1.5rem'>
					Aquí puedes ver y editar los hábitos que estás trabajando
				</Typography>
				;
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alingItems: 'center',
				}}
			>
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
			</Grid>
			<Grid
				item
				xs={11}
				sx={{
					display: 'flex',
					justifyContent: 'end',
					alingItems: 'center',
				}}
			>
				<GlobalButton text='Cambia tus habitos' action={navegacion} />
			</Grid>
		</Grid>
	);
}