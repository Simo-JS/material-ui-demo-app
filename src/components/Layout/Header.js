import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CreateDialog from "../Exercises/Dialogs/CreateDialog";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
          Paid Exercises
        </Typography>
        <CreateDialog
          categories={props.categories}
          handleCreate={props.handleCreate}
        />
      </Toolbar>
    </AppBar>
  );
};
