import React from 'react';
import Profile1 from '../componentesProfile/Profile1';
import ClienteGql from '../utils/GqlClient';
import './styles/Profile.css';
import Peticiones from '../utils/consultasPersonalizadas';

const GQLClient = ClienteGql;
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.saveUser();
  }

  saveUser = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    const { usuario } = this.props;
    if (usuario) {
      try {
        let variables = { sub: usuario.sub };
        let usuarioActual = await GQLClient.request(
          Peticiones.getUsuarioporSub,
          variables
        );
        usuarioActual = usuarioActual.getUsuarioporSub;

        if (!usuarioActual) {
          variables = {
            input: {
              nickname: usuario.nickname,
              name: usuario.name,
              picture: usuario.picture,
              email: usuario.email,
              sub: usuario.sub,
            },
          };
          await GQLClient.request(Peticiones.crearUsuario, variables);
          this.setState({
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error,
        });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='profile__profile1'>
          <div className='row'>
            <div className='col-8'>
              <Profile1
                picture={this.props.usuario.picture}
                nickname={this.props.usuario.nickname}
                name={this.props.usuario.name}
                email={this.props.usuario.email}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
