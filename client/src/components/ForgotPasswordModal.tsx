import { Button, Grid, Paper, Typography, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SubmitHandler, useForm } from "react-hook-form";
import GlobalButton from "./GlobalButton";

interface ForgotPasswordModal {
    close: () => void;
}

type FormData = {
	email: string;
};
export default function ForgotPasswordModal({close}: ForgotPasswordModal){

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//Para probar si funcionan los formularios
	const formSubmitHandler: SubmitHandler<FormData> = (data: FormData) => {
		console.log('email ', data);
		() => close()
	};
    return(
    
      
       <Grid sx={{          
                position:'fixed',
                top:0,
                left: 0,
                zIndex:999,
                display: 'flex',
                justifyContent: 'center',
                width:'100%',
                height:'100%',
                backgroundColor: 'rgba(0,0,0,0.25)'

       }}>
            <Paper 
                sx={{
                    marginTop:'100px',
                    width:'400px',
                    height:'390px',
                    display: 'block',
                    flexDirection:'column',
                    padding: '20px 20px',
                    border: 'solid gray'
                }}> 
                
                    

                    <img src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669209748/ananda%20marga/home/alerts/FeaturedIconMail_fgcdsc.png' alt="alert simbol" 
                                    style={{
                                            display: 'inline-block', 
                                            position:'relative', 
                                            left: '150px'
                                            }}/>
                        
                        
                        
                        <IconButton aria-label="close" 
                                    onClick={() => close()}
                                    sx={{ 
                                        float: 'right',
                                        display: 'inline-block'
                                        }}
                        >
                            <CloseIcon />
                        </IconButton>
                    <Typography variant="h4" 
                                color="text.primary"
                                sx={{
                                    fontSize:'18px',
                                    fontWeight:600,
                                    lineHeight:'28px',
                                    margin:'5px 0',
                                    textAlign: 'center'
                                }}
                    >
                        Olvidó su contraseña? 
                    </Typography>

                    <Typography variant="body1" 
                                color="text.primary"
                                sx={{
                                    fontSize:'16px',
                                    fontWeight:400,
                                    lineHeight:'24px',
                                    textAlign: 'center'
                                }}
                    >
                        ¡No te preocupes! Ingrese la dirección de correo electrónico vinculada con su cuenta.
                        
                    </Typography>

                    <Grid item xs={12} sx={{margin:'30px 0'}}>
					<TextField
						
						{...register('email', {
							required: 'Este campo es requerido',
							pattern: { message: "Ingrese un correo valido", value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} 
						})}
						error={!!errors.email}
						helperText={errors.email?.message}
						type='email'
                        placeholder='you@example.com'
						label='Correo'
						variant='outlined'
						color='text'
						fullWidth
					/>
				</Grid>

				<Grid
					item
					xs={12}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<GlobalButton text='Enviar' action={handleSubmit(formSubmitHandler)} />
				
				</Grid>
            </Paper>
          
       </Grid>
    )
}