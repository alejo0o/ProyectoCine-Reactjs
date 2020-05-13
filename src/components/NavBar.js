import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';

//Versión 1 del navbar
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <div>
      {!isAuthenticated && (
        <div className="ContenedorNavBar">
          <button className="ElementoNavBar" onClick={() => loginWithRedirect({})}>Log in</button>
        </div>

      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      
    </div>

  );
};

export default NavBar;
