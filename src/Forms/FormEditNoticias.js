import React, { Component } from 'react';
import Peticiones from '../utils/consultasNoticias';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navbar.css';

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='container-fluid Navbar__brand'>
        <h2 className='center'>NOTICIAS EDIT Y DELETE</h2>
      </div>
    </div>
  );
}

class FormEditNoticias extends Component {
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
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    const variables = {
      id: this.props.match.params.notiId,
    };
    try {
      const data = await Peticiones.ClienteGql.request(
        Peticiones.getNoticia,
        variables
      );
      this.setState({
        loading: false,
        form: data.getNoticia,
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
    //this.state.form.peliculasid = parseInt(this.state.form.peliculasid);
    const variables = {
      input: this.state.form,
      id: this.props.match.params.notiId,
    };
    try {
      await Peticiones.ClienteGql.request(Peticiones.editNoticia, variables);
      this.setState({
        loading: false,
      });

      this.props.history.push('/forms/Noticias');
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
        id: parseInt(this.props.match.params.notiId),
      };
      await Peticiones.ClienteGql.request(Peticiones.deleteNoticia, variables);
      this.props.history.push('/forms/Noticias');
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

export default FormEditNoticias;
