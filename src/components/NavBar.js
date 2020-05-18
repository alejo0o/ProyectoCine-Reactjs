import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import "./styles/NavBar.css";
//Versión 1 del navbar
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <section>
      {!isAuthenticated && (
        <div className="ContenedorNavBar">
          <div className="ElementoNavBar">
            <img
              alt=""
              src="https://i.ibb.co/KrWnSMj/source.gif"
              className="LogoNav"
            />
          </div>
          
          <button className="ElementoNavBar" onClick={() => loginWithRedirect({})}>Log in</button>
        </div>

      )}
      


      {isAuthenticated && (
        <div className="ContenedorNavBar">
        <div className="ElementoNavBar">
          <img
            alt=""
            src="https://i.ibb.co/KrWnSMj/source.gif"
            className="LogoNav"
          />
        </div>
        
        <button className="ElementoNavBar" onClick={() => logout()}>Log out</button>
      </div>
      )
    }
    </section>

  );
};

export default NavBar;
