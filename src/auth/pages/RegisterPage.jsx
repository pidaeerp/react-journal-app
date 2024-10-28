import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { Fragment } from "react";
import { AuthLayut } from "../layout/AuthLayut";

export const RegisterPage = () => {
  return (
    <Fragment>
      <AuthLayut title="Crear Cuenta">
        <form>
          <Grid2 container>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                //id="email"
                label="Nombre Completo"
                //name="email"
                placeholder="Nombre Completo"
                type="text"
                //variant="outlined"
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                //id="email"
                label="Correo"
                //name="email"
                placeholder="correo@google.com"
                type="email"
                //variant="outlined"
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                //id="password"
                label="Contraseña"
                //name="password"
                placeholder="Contraseña"
                type="password"
                //variant="outlined"
              />
            </Grid2>
            <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container direction="row" justifyContent="end" size={12}>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayut>
    </Fragment>
  );
};

//export default RegisterPage;
