import React from 'react';

import { Link } from 'react-router-dom';


//Versión 1 del navbar
const GlobalNavbar = () => {
  return (
    <React.Fragment>
      <span>
        <nav className='navbar navbar-expand-lg navbar-dark  bg-dark mt-5'>
          <a className='navbar-brand' href='#'>
            Proyecto Cine
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>

              <li className='nav-item'>
              <Link to='/noticias' className='nav-link'>
                  Home&nbsp;<i className="fas fa-home"></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/estrenos' className='nav-link'>
                  Estrenos&nbsp;<i class="fas fa-ticket-alt"></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/criticas' className='nav-link'>
                  Críticas&nbsp;<i class="far fa-comments"></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/animes' className='nav-link'>
                   Anime&nbsp;<i class="far fa-grin-stars"></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile' className='nav-link'>
                  Perfil&nbsp;<i class="fas fa-user"></i>
                </Link>
              </li>
            </ul>
            <form className='form-inline mt-2 mt-md-0'>
              <input
                className='form-control mr-sm-2'
                type='text'
                placeholder='Buscar'
                aria-label='Buscar'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'>
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </span>
    </React.Fragment>
  );
};

export default GlobalNavbar;

/**/
