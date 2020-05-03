import React from 'react';

import { Link } from 'react-router-dom';


//Versión 1 del navbar
const GlobalNavbar = () => {
  return (  
    <React.Fragment>
        <span>
           <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Proyecto Cine</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Estrenos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Críticas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Top 10</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Anime</a>
                </li>
                <li className="nav-item">
                   
                    <Link to='/profile' className="nav-link">Perfil</Link>
                </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
            </div>

            </nav>
      </span>
    </React.Fragment>
  );
};

export default GlobalNavbar;











/**/