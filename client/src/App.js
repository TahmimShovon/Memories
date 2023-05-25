import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

const App = () =>{
   
    return (
        <BrowserRouter>
        <GoogleOAuthProvider clientId="851823776196-077ig52a7986ldf20hdjctb7k98rto10.apps.googleusercontent.com" >

        <Container maxWidth = 'lg'>
            <Navbar />
            <Switch>
            <Route path ="/" exact component={Home} />
            <Route path="/auth" exact component ={Auth} />
            </Switch>
        </Container>
        </GoogleOAuthProvider>

        </BrowserRouter>
    )
}

export default App;