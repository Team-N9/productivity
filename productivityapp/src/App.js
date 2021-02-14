import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Profile from './Components/Profile';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <PrivateRoute path="/profile" component={Profile} />
    </Router>
  );
}

export default App;