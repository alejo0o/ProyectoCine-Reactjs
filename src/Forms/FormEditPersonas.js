import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';

import React, { Component } from 'react';

import Peticiones from '../utils/consultasPersonas';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>PERSONAS EDIT Y DELETE</h2>
      </div>
    </div>
  );
}

class FormEditPersonas extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        error: false,
        form: {
          paiid: '',
          pernombre: '',
          perapellido: '',
          perfechanacim: '',
          perlugarnacim: '',
        },
      };
    }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    const variables = {
      id: this.props.match.params.perid,
    };
    try {
      const data = await Peticiones.ClienteGql.request(
        Peticiones.getPersona,
        variables
      );
      this.setState({
        loading: false,
        form: data.getPersona,
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
      const variables = {
      input: this.state.form,
      id: this.props.match.params.perid,
    };
    try {
      await Peticiones.ClienteGql.request(Peticiones.editPersona, variables);
      this.setState({
        loading: false,
      });

      this.props.history.push('/forms/Personas');
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
        id: parseInt(this.props.match.params.perid),
      };
      await Peticiones.ClienteGql.request(Peticiones.deletePersona, variables);
      this.props.history.push('/forms/Personas');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return(
    <React.Fragment>
    <NavBar></NavBar>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label className='label'>Paiid:</label>
              <input
                type='text'
                name='paiid'
                className='form-control'
                onChange={this.onChange}
                value={this.state.form.paiid}></input>
            </div>

            <div className='form-group'>
              <label className='label'>Nombre:</label>
              <input
                type='text'
                name='pernombre'
                className='form-control'
                onChange={this.onChange}
                value={this.state.form.pernombre}></input>
            </div>

            <div className='form-group'>
              <label className='label'>Apellido:</label>
              <input
                type='text'
                name='perapellido'
                className='form-control'
                onChange={this.onChange}
                value={this.state.form.perapellido}></input>
            </div>

            <div className='form-group'>
              <label className='label'>Fecha nacimiento:</label>
              <input
                type='text'
                name='perfechanacim'
                className='form-control'
                onChange={this.onChange}
                value={this.state.form.perfechanacim}></input>
            </div>

            <div className='form-group'>
              <label className='label'>Lugar nacimiento:</label>
              <input
                type='text'
                name='perlugarnacim'
                className='form-control'
                onChange={this.onChange}
                value={this.state.form.perlugarnacim}></input>
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

export default FormEditPersonas;
