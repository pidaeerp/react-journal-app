import { StarOutline } from "@mui/icons-material";
import { Grid, Grid2, Typography } from "@mui/material";
import React, { Fragment } from "react";

export const NothingSelectedView = () => {
  return (
    <Fragment>
      <Grid2
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "calc(100vh - 110px)",
          backgroundColor: "primary.main",
          borderRadius: 3,
        }}
      >
        <Grid2 xs={12}>
          <StarOutline sx={{ fontSize: 100, color: "white" }} />
        </Grid2>
        <Grid2 xs={12}>
          <Typography color="white" variant="h5">
            Selecciona o crea una entrada
          </Typography>
        </Grid2>
      </Grid2>
    </Fragment>
  );
};

//export default NothingSelectedView;
