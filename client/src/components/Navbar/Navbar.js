import React, {useState, useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Button, Avatar, Toolbar, Typography } from "@material-ui/core";
import connectify from "../../images/connectify.png";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
 

  const logout = ()=> {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  }

  useEffect( ()=>{
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" >
    <div className={classes.brandContainer}>
      <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Connectify</Typography>
      <img className={classes.image} src={connectify} alt="icon" height="60"/>
    </div>
    <Toolbar className={classes.toolbar}>
      {user? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.name ? user.name : user.result.name} src={user.picture ? user.picture: user.result.picture}>{user.name ? user.name.charAt(0) : user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant = 'h6'>{user.name? user.name : user.result.name}</Typography>
            <Button className={classes.logout} variant='contained' color='secondary' onClick={logout}>Logout</Button>
          </div>
      ) : (
            <Button component={Link} to = '/auth' variant='contained' color='primary' >Sign in</Button>
      )}
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;
