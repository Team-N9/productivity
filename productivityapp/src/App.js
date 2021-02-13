import React, { useState } from 'react';

import Login from './components/session/Login';
import fire from './fire.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  console.log('logged in?', isLoggedIn);
  return (
    <div className="App">
      <Router>
        
        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </>
          ) 
          : (
          <span onClick={signOut}>
            <a href="#">Sign out</a>
          </span>
          )}
      </Router>
    </div>
  );
}
const signOut = () => {
  fire.auth().signOut()
};

export default App;
