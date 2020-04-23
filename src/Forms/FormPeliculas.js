import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import Peticiones from '../utils/consultasPeliculas';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>PELICULAS</h2>
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
        claid: '',
        nombre: '',
        fechadelanzamiento: '',
        duracion: '',
        sinopsis: '',
        trailer: '',
      },
      peliculasList: [],
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
      const data = await Peticiones.ClienteGql.request(Peticiones.getPeliculas);

      this.setState({
        loading: false,
        peliculasList: this.state.peliculasList.concat(data.getPeliculas),
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
      this.state.form.duracion = parseInt(this.state.form.duracion);
      this.setState({
        loading: false,
      });
      const variables = {
        input: this.state.form,
      };
      await Peticiones.ClienteGql.request(Peticiones.createPelicula, variables);
      window.location.reload();
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
      console.log(error);
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
                  <label className='label'>Claid:</label>
                  <input
                    type='text'
                    name='claid'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.claid}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Nombre:</label>
                  <input
                    type='text'
                    name='nombre'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.nombre}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Fecha lanzamiento:</label>
                  <input
                    type='text'
                    name='fechadelanzamiento'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.fechadelanzamiento}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Duracion</label>
                  <input
                    type='text'
                    name='duracion'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.duracion}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Sinopsis:</label>
                  <textarea
                    name='sinopsis'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.sinopsis}></textarea>
                </div>

                <div className='form-group'>
                  <label className='label'>Trailer:</label>
                  <input
                    type='text'
                    name='trailer'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.trailer}></input>
                </div>

                <button className='btn btn-primary'>Save</button>
              </form>
            </div>
            <div className='col-6'>
              <ul>
                {this.state.peliculasList.map((pelicula) => {
                  return (
                    <li key={pelicula.peliculasid}>
                      <Link to={`${pelicula.peliculasid}/EditPelicula`}>
                        {pelicula.peliculasid}
                      </Link>
                      <p>{pelicula.nombre}</p>
                      <p>{pelicula.sinopsis}</p>
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
