import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';

//Versión 1 del navbar
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
<<<<<<< HEAD
        <div className="ContenedorNavBar">
          <button className="ElementoNavBar" onClick={() => loginWithRedirect({})}>Log in</button>
        </div>

=======
        <button onClick={() => loginWithRedirect({})}>Log in</button>
>>>>>>> 7cc804a3f06ab261088f24b077e0c36b093c7382
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>

  );
};

export default NavBar;
