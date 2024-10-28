import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

const JournalLayout = ({ children }) => {
  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        {/* Navbar drawerWidth */}
        <NavBar drawerWidth={drawerWidth} />
        {/* Sidebar drawerWidth */}
        <SideBar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Toolbar */}
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Fragment>
  );
};

export default JournalLayout;
