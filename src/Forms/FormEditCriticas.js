import React, { Component } from 'react';
import Peticiones from '../utils/consultasCriticas';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';
import ClienteGql from '../utils/GqlClient';

const GQLClient = ClienteGql;

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>CRITICAS EDIT Y DELETE</h2>
      </div>
    </div>
  );
}

class FormEditCriticas extends Component {
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
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    const variables = {
      id: this.props.match.params.criId,
    };
    try {
      const data = await GQLClient.request(Peticiones.getCritica, variables);
      this.setState({
        loading: false,
        form: data.getCritica,
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
    this.state.form.crivalor = parseFloat(this.state.form.crivalor);
    this.state.form.peliculasid = parseInt(this.state.form.peliculasid);
    this.state.form.id = parseInt(this.state.form.id);
    const variables = {
      input: this.state.form,
      id: this.props.match.params.criId,
    };
    try {
      await GQLClient.request(Peticiones.editCritica, variables);
      this.setState({
        loading: false,
      });

      this.props.history.push('/forms/Criticas');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });

    }
  };
  handleDelete = async () => {
    let variables;
    try {
      variables = {
        id: parseInt(this.props.match.params.criId),
      };
      await GQLClient.request(Peticiones.deleteCritica, variables);
      this.props.history.push('/forms/Criticas');
    } catch (error) {

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

export default FormEditCriticas;
