import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { Fragment } from "react";
import { AuthLayut } from "../layout/AuthLayut";

export const LoginPage = () => {
  return (
    <Fragment>
      <AuthLayut title="Login">
        <form>
          <Grid2 container>
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
              <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container direction="row" justifyContent="end" size={12}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayut>
    </Fragment>
  );
};

//export default LoginPage;
