//import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

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
        {/* {<NoteView />} */}
        {!!active ? <NoteView /> : <NothingSelectedView />}
        <IconButton
          onClick={onClickNewNote}
          size="large"
          disabled={isSaving}
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

//export default JournalPage;
