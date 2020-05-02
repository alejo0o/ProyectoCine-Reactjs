import './styles/VideosTrailer.css';

import React, { Component } from 'react';

import ClienteGql from '../utils/GqlClient';
import Peticiones from '../utils/recursosPersonalizados';
import ReactPlayer from 'react-player';

const GQLClient = ClienteGql;

class VideosTrailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      page: '',
      peliculasEstreno: [],
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
        Peticiones.getPeliculasporEstreno,
        variables
      );
      this.setState({
        loading: false,
        peliculasEstreno: Object.values(
          this.state.peliculasEstreno.concat(data.getPeliculasporEstreno)
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
        {this.state.peliculasEstreno.map((pelicula) => {
          return (
            <div key={pelicula.peliculasid} className="general">
              <div className="trailerDescrip">
                <div className="video">
                  <ReactPlayer
                    url={pelicula.trailer}
                    controls={true}
                    width={500}
                    height={300}
                    className="trailerVideo"
                  ></ReactPlayer>
                </div>
                <div className="trailerTexto">
                  <h5>{pelicula.nombre}</h5>
                  <p>{pelicula.sinopsis}</p>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default VideosTrailer;

{
  /* <div className="grid-container">
              <div key={pelicula.peliculasid} className="grid-item">
                <ReactPlayer
                  url={pelicula.trailer}
                  controls={true}
                  width={500}
                  height={300}
                  // className="trailerVideo"
                ></ReactPlayer>
                <div className="texto">
                  <h5>{pelicula.nombre}</h5>
                  <p>{pelicula.sinopsis}</p>
                </div>
              </div>
            </div> */
}
