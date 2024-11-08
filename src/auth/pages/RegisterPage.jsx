import {
  Alert,
  Button,
  Grid2,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { Fragment, useMemo, useState } from "react";
import { AuthLayut } from "../layout/AuthLayut";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  //console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) {
      return;
    }

    dispatch(startCreatingUserWithEmailPassword(formState));
  };
  return (
    <Fragment>
      <AuthLayut title="Crear Cuenta">
        {/* <h1>FormValid {isFormValid ? "Valido" : "Incorrecto"}</h1> */}
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid2 container>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                //id="email"
                label="Nombre Completo"
                placeholder="Nombre Completo"
                type="text"
                //variant="outlined"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid2>
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
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                //id="password"
                label="Contraseña"
                placeholder="Contraseña"
                type="password"
                //variant="outlined"
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid2>
            <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid2
                size={{ xs: 12, sm: 12, md: 12 }}
                display={!!errorMessage ? "" : "none"}
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
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
