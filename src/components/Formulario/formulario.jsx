import React from 'react';
import {Box, Button, Checkbox, Container,  FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material'

function Formulario(props) {
  return (
    <>
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alingItems: 'center',
            }}>
                <Typography component="span" variant='h5'>
                    {props.titulo}
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField fullWidth margin='normal' label="Email" name="email" variant="filled" required/>
                    <TextField fullWidth margin='normal' label="Senha" type="password" variant="filled" required/>
                    <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Lembrar-me"/>
                    <Button fullWidth type='submit' variant='contained' sx={{mt:4,mb:2}}>Login</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#">Esqueci minha senha</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#">Cadastre-se</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </>
  )
}

export default Formulario;