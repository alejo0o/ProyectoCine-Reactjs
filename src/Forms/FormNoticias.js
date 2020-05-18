import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import Peticiones from '../utils/consultasNoticias';
import ClienteGql from '../utils/GqlClient';

const GQLClient = ClienteGql;

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>NOTICIAS</h2>
      </div>
    </div>
  );
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      form: {
        peliculasid: '',
        nottexto: '',
        notfecha: '',
        nottitulo: '',
        notimagen: '',
      },
      noticiasList: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await GQLClient.request(Peticiones.getNoticias);

      this.setState({
        loading: false,
        noticiasList: this.state.noticiasList.concat(data.getNoticias),
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      this.setState({
        loading: false,
      });
      const variables = {
        input: this.state.form,
      };
      await GQLClient.request(Peticiones.createNoticia, variables);
      window.location.reload();
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });

    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label className='label'>peliculasid:</label>
                  <input
                    type='text'
                    name='peliculasid'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.peliculasid}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Texto:</label>
                  <input
                    type='text'
                    name='nottexto'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.nottexto}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Fecha:</label>
                  <input
                    type='text'
                    name='notfecha'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.notfecha}></input>
                </div>
                <div className='form-group'>
                  <label className='label'>Titulo:</label>
                  <input
                    type='text'
                    name='nottitulo'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.nottitulo}></input>
                </div>
                <div className='form-group'>
                  <label className='label'>Imagen:</label>
                  <input
                    type='text'
                    name='notimagen'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.notimagen}></input>
                </div>
                <button className='btn btn-primary'>Save</button>
              </form>
            </div>
            <div className='col-6'>
              <ul>
                {this.state.noticiasList.map((noticia) => {
                  return (
                    <li key={noticia.notid}>
                      <Link to={`${noticia.notid}/EditNoticia`}>
                        {noticia.notid}
                      </Link>
                      <p>{noticia.nottexto}</p>
                      <p>{noticia.notfecha}</p>
                      <p>{noticia.nottitulo}</p>
                      <p>{noticia.notimagen}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Form;
