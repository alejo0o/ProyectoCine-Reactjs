import React, { Component } from 'react';
import Peticiones from '../utils/consultasPeliculas';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>PELICULAS EDIT Y DELETE</h2>
      </div>
    </div>
  );
}

class FormEditPeliculas extends Component {
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
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    const variables = {
      id: this.props.match.params.peliId,
    };
    try {
      const data = await Peticiones.ClienteGql.request(
        Peticiones.getPelicula,
        variables
      );
      this.setState({
        loading: false,
        form: data.getPelicula,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }
  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    this.state.form.duracion = parseInt(this.state.form.duracion);
    const variables = {
      input: this.state.form,
      id: this.props.match.params.peliId,
    };
    try {
      await Peticiones.ClienteGql.request(Peticiones.editPelicula, variables);
      this.setState({
        loading: false,
      });

      this.props.history.push('/forms/Peliculas');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
      console.log(error);
    }
  };
  handleDelete = async () => {
    let variables;
    try {
      variables = {
        id: parseInt(this.props.match.params.peliId),
      };
      await Peticiones.ClienteGql.request(Peticiones.deletePelicula, variables);
      this.props.history.push('/forms/Peliculas');
    } catch (error) {
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
              <button
                className='btn btn-danger mt-2'
                onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormEditPeliculas;
