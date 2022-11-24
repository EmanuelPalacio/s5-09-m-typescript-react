import Grid from '@mui/material/Grid';
import FormProfileWithUserInfo from './components/FormProfileWithUserInfo';
import FormProfileWithUserInfo2 from './components/FormProfileWithUserInfo2';
import PerfilSidebar from '../../components/PerfilSidebar';
import Calendar from './components/Calendar';
import Form from './components/Form';
import { TopBarProfile } from './components';
import { useState } from 'react';

export default function Profile() {
	const [modal, setModal] = useState<string>('perfil');
	const setModals = (nameModal: string) => {
		setModal(nameModal);
	};
	const renderModal = (modal: string) => {
		if ((modal = 'perfil')) {
			return <FormProfileWithUserInfo />;
		}
	};
	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{
					height: 'calc(100vh - 85px)',
				}}
			>
				<Grid item xs={2}>
					<PerfilSidebar setModals={setModals} />
				</Grid>

				<Grid item xs={10}>
					<TopBarProfile />
					{/* aca van los componentes */}
				</Grid>
			</Grid>
		</>
	);
}
/* agregar logica de cambio de componentes utilizando el menu sidebard */
/* <FormProfileWithUserInfo />
	<FormProfileWithUserInfo2 /> */
/* <Calendar /> */
/* <Form /> */