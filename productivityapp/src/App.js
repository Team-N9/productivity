import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Login from './components/Login';
import fire from './fire.js';
import Home from './components/Home';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalProvider } from './Context/GlobalState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Profile from './components/Profile';
import About from './components/About';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Styles/theme';

function App() {

  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <UnPrivateRoute path="/register" component={Register}/>
          <UnPrivateRoute path="/login" component={Login}/>
          <UnPrivateRoute path="/about" component={About}/>
          <PrivateRoute path="/profile" component={Profile} />
        </Router>
      </ThemeProvider>
    </GlobalProvider>
    
    
  );
}

export default App;
