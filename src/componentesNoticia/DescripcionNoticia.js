import './styles/DescripcionNoticia.css';

import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Peticiones from '../utils/recursosPersonalizados';

const GQLClient = ClienteGql;

class DescripcionNoticia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      page: '',
      noticiasFechaList: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const variables = {
      page: 1,
    };
    try {
      const data = await GQLClient.request(
        Peticiones.getNoticiasFecha,
        variables
      );
      this.setState({
        loading: false,
        noticiasFechaList: Object.values(
          this.state.noticiasFechaList.concat(data.getNoticiasFecha)
        ),
      });
      // window.location.reload();
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
        {/* <form className="col-6" onSubmit={this.fetchData}>
          <div className="form-group">Texto:</div>
          <button>Save</button>
        </form> */}
        {this.state.noticiasFechaList.map((noticia) => {
          return (
            <div className="general">
              <div key={noticia.notid} className="noticiaDescrip">
                <div className="imagen">
                  <img
                    src={noticia.notimagen}
                    alt={noticia.nottitulo}
                    className="noticiaImagen"
                  ></img>
                  <div className="imagenTexto">NOTICIAS</div>
                </div>
                <div className="noticiaTexto">
                  <h5>{noticia.nottitulo}</h5>
                  <p>{noticia.nottexto}</p>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default DescripcionNoticia;
