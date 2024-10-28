import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import JournalLayout from "../layout/JournalLayout";

const JournalPage = () => {
  return (
    <Fragment>
      <JournalLayout>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam
          vel temporibus non animi est nesciunt adipisci facilis nisi harum
          cumque reiciendis ut eaque necessitatibus, nemo iusto obcaecati dicta
          nulla!
        </Typography>

        {/* NothinSelected */}
        {/* NoteView */}
      </JournalLayout>
    </Fragment>
  );
};

export default JournalPage;
