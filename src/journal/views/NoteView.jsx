import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de octubre del 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió el día de hoy?"
          minRows={5}
        />
      </Grid>
      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  );
};

//export default NoteView
