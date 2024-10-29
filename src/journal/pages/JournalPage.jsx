//import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

const JournalPage = () => {
  return (
    <Fragment>
      <JournalLayout>
        {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam
          vel temporibus non animi est nesciunt adipisci facilis nisi harum
          cumque reiciendis ut eaque necessitatibus, nemo iusto obcaecati dicta
          nulla!
        </Typography> */}
        {/* NothinSelected */}
        {/* {<NothingSelectedView />} */}
        {/* NoteView */}
        {<NoteView />}
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </Fragment>
  );
};

export default JournalPage;
