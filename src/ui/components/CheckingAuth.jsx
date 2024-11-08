import { CircularProgress, Grid2 } from "@mui/material";
import React, { Fragment } from "react";

export const CheckingAuth = () => {
  return (
    <Fragment>
      <Grid2
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          padding: 4,
        }}
      >
        <Grid2 container direction="row" justifyContent="center">
          <CircularProgress color="warning" />
        </Grid2>
      </Grid2>
    </Fragment>
  );
};

//export default CheckingAuth
