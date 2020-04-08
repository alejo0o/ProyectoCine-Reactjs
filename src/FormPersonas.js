import React, { Component } from 'react';
import Api from './api';
class FormPersonas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      form: {
        perid: '',
        paiid: '',
        pernombre: '',
        perapellido: '',
        perfechanacim: '',
        perlugarnacim: '',
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
      await Api.personas.create(this.state.form);
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
              name='perid'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.perid}></input>
          </div>

          <div className='form-group'>
            <label className='label'>Pais Id:</label>
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
            <label className='label'>Apellido</label>
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
      </div>
    );
  }
}

export default FormPersonas;
