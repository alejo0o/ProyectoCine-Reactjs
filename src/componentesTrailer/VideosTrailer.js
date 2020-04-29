import "./styles/VideosTrailer.css";

import ClienteGql from "../utils/consultasPeliculas";
import Peticiones from "../utils/consultasPeliculas";
import React from "react";
import ReactPlayer from "react-player";

const GQLClient = ClienteGql;

class VideosNoticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      peliculasList: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await GQLClient.request(Peticiones.getPeliculas);

      this.setState({
        loading: false,
        peliculasList: this.state.peliculasList.concat(data.getPeliculas),
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
      <React.Fragment>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=lKDGxAHZt0E"}
          controls={true}
        ></ReactPlayer>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrupomedlegal.com%2Fnosotros%2Fabogados%2Fabogados-de-compensacion-laboral%2F&psig=AOvVaw2YvAW0kdgrTjYI-kLG0o2q&ust=1588183923904000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjJxKfci-kCFQAAAAAdAAAAABAD"></img>
        {this.state.peliculasList.map((pelicula) => {
          return (
            <div key={pelicula.peliculaid} className="App">
              trailer 1
              <ReactPlayer url={pelicula.trailer} controls={true}></ReactPlayer>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default VideosNoticias;
