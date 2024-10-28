import { Grid2, Typography } from "@mui/material";
import React, { Fragment } from "react";

export const AuthLayut = ({ children, title = "" }) => {
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
        <Grid2
          className="box-shadow"
          size={{ xs: 4, sm: 4, md: 6 }}
          sx={{
            width: { sm: 450 },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            {title}
          </Typography>
          {children}
        </Grid2>
      </Grid2>
    </Fragment>
  );
};

//export default AuthLayut;
