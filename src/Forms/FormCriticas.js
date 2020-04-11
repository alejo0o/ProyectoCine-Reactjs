import React, { Component } from 'react';
import Api from '../utils/api';
class FormCriticas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      form: {
        criid: '',
        peliculasid: '',
        id: '',
        critexto: '',
        crifecha: '',
        crivalor: '',
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
      await Api.criticas.create(this.state.form);
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
            <label className='label'>critica ID:</label>
            <input
              type='text'
              name='criid'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.criid}></input>
          </div>

          <div className='form-group'>
            <label className='label'>Película Id:</label>
            <input
              type='text'
              name='peliculasid'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.peliculasid}></input>
          </div>

          <div className='form-group'>
            <label className='label'>id usuario</label>
            <input
              type='text'
              name='id'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.id}></input>
          </div>

          <div className='form-group'>
            <label className='label'>critexto</label>
            <input
              type='text'
              name='critexto'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.critexto}></input>
          </div>

          <div className='form-group'>
            <label className='label'>crifecha</label>
            <input
              type='text'
              name='crifecha'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.crifecha}></input>
          </div>

          <div className='form-group'>
            <label className='label'>crivalor</label>
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
    );
  }
}

export default FormCriticas;
