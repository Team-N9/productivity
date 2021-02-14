import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import { Box, Avatar } from '@material-ui/core';

const Navbar = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    let loginContent = null;
    let registerContent = null;
    console.log(isAuthenticated)
    if(isAuthenticated) {   //add a ! to this condition when you fix it
        loginContent = <NavLink to="/login" className="nav-item nav-link inflex-flex items center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-800" >
                        Login
                    </NavLink> 
        registerContent = <NavLink to="/register" className="nav-item nav-link inflex-flex items center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-800" >
                        Register
                    </NavLink> 
    }

    const unauthenticatedNavBar = ()=> {
        return (
            <Box display="flex" flexDirection="row">
                <NavLink to="/" exact activeClassName="text-white" className="">
                    Home
                </NavLink>  
                {loginContent}
                {registerContent}
                <NavLink to="/about" className="" >
                    About Us
                </NavLink>
            </Box>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link> 
                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link> 
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }  
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">The Study Room</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
