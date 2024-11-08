import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { Fragment, useMemo } from "react";
import { AuthLayut } from "../layout/AuthLayut";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSingIn = () => {
    console.log("onGoogleSingIn");
    dispatch(startGoogleSingIn());
  };

  return (
    <Fragment>
      <AuthLayut title="Login">
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid2 container>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                //id="email"
                label="Correo"
                placeholder="correo@google.com"
                type="email"
                //variant="outlined"
                name="email"
                value={email}
                onChange={onInputChange}
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
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid2>

            <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid2
                size={{ xs: 12, sm: 12, md: 12 }}
                display={!!errorMessage ? "" : "none"}
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid2>
            </Grid2>

            <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <Button
                  disabled={isAuthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSingIn}
                >
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
