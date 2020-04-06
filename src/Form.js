import React, { Component } from 'react';
import Api from './api';
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      form: {
        id: '',
        nombre: '',
        fechadelanzamiento: '',
        duracion: '',
        clasificacion: '',
        sinopsis: '',
        trailer: '',
        paisdeorigen: '',
        created_at: '',
        updated_at: '',
      },
    };
  }

  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await Api.peliculas.create(this.state.form);
      this.setState({
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label className='label'>ID:</label>
            <input
              type='text'
              name='id'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.id}></input>
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
            <label className='label'>Clasificacion:</label>
            <input
              type='text'
              name='clasificacion'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.clasificacion}></input>
          </div>

          <div className='form-group'>
            <label className='label'>Sinopsis:</label>
            <input
              type='text'
              name='sinopsis'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.sinopsis}></input>
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

          <div className='form-group'>
            <label className='label'>Pais de Origen:</label>
            <input
              type='text'
              name='paisdeorigen'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.paisdeorigen}></input>
          </div>

          <button className='btn btn-primary'>Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
