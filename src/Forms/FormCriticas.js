import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import Peticiones from '../utils/consultasCriticas';
import ClienteGql from '../utils/GqlClient';

const GQLClient = ClienteGql;

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>CRITICAS</h2>
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
        id: '',
        critexto: '',
        crifecha: '',
        crivalor: '',
      },
      criticasList: [],
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
      const data = await GQLClient.request(Peticiones.getCriticas);

      this.setState({
        loading: false,
        criticasList: this.state.criticasList.concat(data.getCriticas),
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
      this.state.form.crivalor = parseFloat(this.state.form.crivalor);
      this.state.form.peliculasid = parseInt(this.state.form.peliculasid);
      this.state.form.id = parseInt(this.state.form.id);
      this.setState({
        loading: false,
      });
      const variables = {
        input: this.state.form,
      };
      await GQLClient.request(Peticiones.createCritica, variables);
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
                  <label className='label'>Pelicula:</label>
                  <input
                    type='text'
                    name='peliculasid'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.peliculasid}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Usuario:</label>
                  <input
                    type='text'
                    name='id'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.id}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Critica:</label>
                  <input
                    type='text'
                    name='critexto'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.critexto}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Fecha:</label>
                  <input
                    type='text'
                    name='crifecha'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.crifecha}></input>
                </div>

                <div className='form-group'>
                  <label className='label'>Valor</label>
                  <input
                    type='text'
                    name='crivalor'
                    className='form-control'
                    onChange={this.onChange}
                    value={this.state.form.crivalor}></input>
                </div>

                <button className='btn btn-primary'>Save</button>
              </form>
            </div>
            <div className='col-6'>
              <ul>
                {this.state.criticasList.map((critica) => {
                  return (
                    <li key={critica.criid}>
                      <Link to={`${critica.criid}/EditCritica`}>
                        {critica.criid}
                      </Link>
                      <p>{critica.critexto}</p>
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
