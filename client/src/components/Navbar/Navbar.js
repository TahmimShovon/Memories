import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import connectify from "../../images/connectify.png";

import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Connectify
      </Typography>
      <img
        className={classes.image}
        src={connectify}
        alt="icon"
        height="60"
      />
    </AppBar>
  );
};

export default Navbar;
