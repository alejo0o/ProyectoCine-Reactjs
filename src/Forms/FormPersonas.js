import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Peticiones from '../utils/consultasPersonas';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>PERSONAS</h2>
      </div>
    </div>
  );
}
class FormPersonas extends Component {
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
      personasList:[],
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
      const data = await Peticiones.ClienteGql.request(Peticiones.getPersonas);
      this.setState({
        loading: false,
        personasList: this.state.personasList.concat(data.getPersonas),
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
      const variables = {
        input: this.state.form,
      };
      await Peticiones.ClienteGql.request(Peticiones.createPersona, variables);
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

                <button className='btn btn-primary'  onClick={() => window.location.reload(false)} >Save</button>
              </form>
            </div>
            <div className='col-6'>
              <ul>
                {this.state.personasList.map((persona) => {
                  return (
                    <li key={persona.perid}>
                      <Link to={`${persona.perid}/EditarPersona`}>
                        {persona.perid}
                      </Link>
                      <p>{persona.pernombre} {persona.perapellido}</p>
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

export default FormPersonas;
