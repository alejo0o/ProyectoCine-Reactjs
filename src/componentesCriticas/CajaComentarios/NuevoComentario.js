import React, { Component } from 'react';
import { useAuth0 } from '../../react-auth0-spa.js';
import './scss/NuevoComentario.scss';
import ClienteGql from '../../utils/GqlClient';
import Peticiones from '../../utils/consultasCriticas.js';
import Peticiones2 from '../../utils/consultasPersonalizadas.js';
import Rating from '@material-ui/lab/Rating';

const GQLClient = ClienteGql;

class FormComentario extends Component {
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
      criid: '',
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

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    //Obtiene el ciente
    //es necesario hace split por el formato en que devuelve auth0
    let usuarioid;
    this.setState({
      loading: true,
      error: null,
    });
    try {
      let vars = {
        sub: this.props.idUser,
      };
      const usu = await GQLClient.request(Peticiones2.getUsuarioporSub, vars);
      this.state.form.id = usu.getUsuarioporSub.id;
      usuarioid = usu.getUsuarioporSub.id;
      this.setState({
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
    /*var partsArray = this.props.idUser.split('|');
    console.log(partsArray);*/
    const variables = {
      idMovie: this.props.peliid,
      idUser: usuarioid,
    };
    //Se setea el usuario del form para utilizarlo en el create
    //this.state.form.id = partsArray[1];

    try {
      const data = await GQLClient.request(
        Peticiones2.getCriticasUsuarioPelicula,
        variables
      );
      this.setState({
        loading: false,
        form: data.getCriticasUsuarioPelicula,
        criid: data.getCriticasUsuarioPelicula.criid,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    this.state.form.crivalor = parseFloat(this.state.form.crivalor);
    this.state.form.peliculasid = parseInt(this.props.peliid);
    this.state.form.crifecha = this.getDate();

    try {
      if (this.state.criid == '') {
        const variables = {
          input: this.state.form,
        };
        console.log(variables);
        await GQLClient.request(Peticiones.createCritica, variables);
      } else {
        const variables = {
          input: this.state.form,
          id: this.state.criid,
        };
        //Cuando si existe la critica y se carga el form desde la DB, el campo criid se crea
        //Si no se lo elimina, graphql no sabra que hacer con el valor extra
        delete this.state.form.criid;
        console.log(variables);
        await GQLClient.request(Peticiones.editCritica, variables);
      }

      this.setState({
        loading: false,
      });

      window.location.reload();
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
      console.log(error);
    }
  };

  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  render(props) {
    return (
      <div className='contenedor'>
        <div>
          <h6>{this.props.usuario}</h6>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className='etiqueta'>Puntaje: </label>
          <Rating
            name='crivalor'
            className='estrellas'
            onChange={this.onChange}
            value={parseFloat(this.state.form.crivalor)}
            precision={0.5}
          />
          <textarea
            placeholder='Escriba su critica...'
            name='critexto'
            onChange={this.onChange}
            value={this.state.form.critexto}
          />
          <button type='submit' className='boton'>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

const NuevoComentario = (props) => {
  const { loading, user, loginWithRedirect } = useAuth0();

  if (loading || !user) {
    return (
      <div className='contenedor'>
        <button onClick={() => loginWithRedirect({})} className='boton'>
          Iniciar sesión para dejar una crítica
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <FormComentario
          peliid={props.peliid}
          usuario={user.email}
          idUser={user.sub}
        />
      </div>
    );
  }
};

export default NuevoComentario;
