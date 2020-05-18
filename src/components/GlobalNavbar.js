import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './styles/NavBar.css';

//Versión 1 del navbar
class GlobalNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      word: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <React.Fragment>
        <span>
          <nav className='navbar navbar-expand-md navbar-dark color-nav mt-0 sticky-top'>
            <Link className='navbar-brand' to='/'>
              Cine Leaders
            </Link>
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
                    Home&nbsp;<i className='fas fa-home'></i>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/estrenos' className='nav-link'>
                    Estrenos&nbsp;<i className='fas fa-ticket-alt'></i>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/criticas' className='nav-link'>
                    Críticas&nbsp;<i className='far fa-comments'></i>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/animes' className='nav-link'>
                    Anime&nbsp;<i className='far fa-grin-stars'></i>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link'>
                    Perfil&nbsp;<i className='fas fa-user'></i>
                  </Link>
                </li>
              </ul>
              <form className='form-inline mt-2 mt-md-0'>
                <input
                  className='form-control mr-sm-2'
                  name='word'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.word}
                  placeholder='Buscar'
                  aria-label='Buscar'
                />
                <a href={`/Buscar/${this.state.word}`} className='nav-link'>
                  Buscar&nbsp;<i className='fas fa-search'></i>
                </a>
              </form>
            </div>
          </nav>
        </span>
      </React.Fragment>
    );
  }
}
export default GlobalNavbar;
