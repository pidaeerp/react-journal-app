import React, { Fragment } from "react";
import AppRouter from "./router/AppRouter";
import { AppTheme } from "./theme";

const JournalApp = () => {
  return (
    <Fragment>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Fragment>
  );
};

export default JournalApp;
