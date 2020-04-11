import React, { Component } from 'react';
import Api from '../utils/api';
class FormNoticias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      form: {
        peliculasid: '',
        nottexto: '',
        notfecha: '',
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
      await Api.noticias.create(this.state.form);
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
            <label className='label'>Película Id:</label>
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
            <label className='label'>Fecha</label>
            <input
              type='text'
              name='notfecha'
              className='form-control'
              onChange={this.onChange}
              value={this.state.form.notfecha}></input>
          </div>
          <button className='btn btn-primary'>Save</button>
        </form>
      </div>
    );
  }
}

export default FormNoticias;
