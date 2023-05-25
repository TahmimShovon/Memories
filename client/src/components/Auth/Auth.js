import React, { useState } from 'react'
import { Avatar, Button, Paper, Typography, Grid, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { GoogleLogin, googleLogout } from '@react-oauth/google';
// import { createOrGetUser } from '../../api'
import jwt from 'jwt-decode';

const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

  //   const createOrGetUser = async (response) =>{
  //     const decoded = jwt(response.credential);
  //     console.log(decoded);
  // };

    const handleShowPassword = () =>{
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }

  

    const handleSubmit = () => {}
    const handleChange = () => {}


    const googleSuccess = async (res) => {
      // createOrGetUser(res);
      const decoded = jwt(res.credential);
      const token = decoded.aud;
      const name =  decoded.name;
      const picture = decoded.picture;
      const sub= decoded.sub;
      console.log(token);

      try {
        dispatch({ type: 'AUTH', data: {name, token, picture, sub} })
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    }

    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup)
    }

  return (
    <Container component="main" maxWidth="xs" >
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container  spacing={2} >
                {
                  isSignup && (
                    <>
                    
                      <Input name='firstName' label="FirstName" handleChange={handleChange} autoFocus half />
                      <Input name='lastName' label="LastName" handleChange={handleChange} half />

                    </>
                  )
                }
                <Input name='email' label="Email Address" handleChange={handleChange} type='email' />
                <Input name='password' label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password' />}
              </Grid>
              <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit} >
                {isSignup ? 'Sign Up' : 'Sign In'}
              </Button>
              <GoogleLogin 
                onSuccess={googleSuccess}
                onError={() => console.log('Error')}
              />
              <Grid container justifyContent='center'>
                <Grid item>
                  <Button onClick={switchMode}>
                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </form>
        </Paper>

    </Container>
  )
}

export default Auth