import React, { useState } from 'react';

import Login from './components/session/Login';
import fire from './fire.js';
import Home from './components/session/Home';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  view: {
    height: '100%'
  }
}));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  console.log('logged in?', isLoggedIn);
  return (
    <Router className={useStyles.view}>
      <Switch>
        {!isLoggedIn
          ? (
          <Route path="/">
            <Login />
          </Route>
          ) 
          : (
          <Route path="/">
            <Home />
          </Route>
          )
        }
      </Switch>
    </Router>
  );
}
const signOut = () => {
  fire.auth().signOut()
};

export default App;
