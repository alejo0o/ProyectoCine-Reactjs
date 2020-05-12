//React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AnimesPagina from './paginas/Animes';
//PAGINAS WEB
import CriticasPagina from './paginas/Criticas';
import DescripcioNoticia from './paginas/Noticias';
import EditCritica from './Forms/FormEditCriticas';
import EditNoticia from './Forms/FormEditNoticias';
import EditPelicula from './Forms/FormEditPeliculas';
import EditarPersona from './Forms/FormEditPersonas';
import EstrenosDirector from './paginas/Estrenos';
import FormCriticas from './Forms/FormCriticas';
import FormNoticias from './Forms/FormNoticias';
import Trailer from './paginas/Trailers';
//Forms
import FormPeliculas from './Forms/FormPeliculas';
import FormPersonas from './Forms/FormPersonas';
//AUTENTICACION
import NavBar from './components/NavBar';
import NavBar2 from './components/GlobalNavbar';
import Footbar from './components/Footbar.js';
import NoticiasID from './paginas/DetalleNoticia';
import PeliculasCritica from './paginas/PeliculaCritica';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import React from 'react';
//PAGINAS WEB
import history from './utils/history'; //en el causo de uso de router
import { useAuth0 } from './react-auth0-spa';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <NavBar2 />
      <Switch>
        <Route exact path='/forms/Peliculas' component={FormPeliculas} />
        <Route exact path='/forms/Personas' component={FormPersonas} />
        <Route exact path='/forms/Noticias' component={FormNoticias} />
        <Route exact path='/forms/Criticas' component={FormCriticas} />
        <Route
          exact
          path='/forms/:peliId/EditPelicula'
          component={EditPelicula}
        />
        <Route
          exact
          path='/forms/:notiId/EditNoticia'
          component={EditNoticia}
        />
        <Route
          exact
          path='/forms/:perid/EditarPersona'
          component={EditarPersona}
        />
        <PrivateRoute path='/profile' component={Profile} />

        <Route exact path='/forms/:criId/EditCritica' component={EditCritica} />

        {/*Rutas a las paginas web*/}
        <Route exact path='/' component={DescripcioNoticia} />
        <Route exact path='/criticas' component={CriticasPagina} />

        <Route exact path='/animes' component={AnimesPagina} />
        <Route
          path='/PeliculaCritica/:peliculasid'
          component={PeliculasCritica}
        />

        <Route path='/Noticias/:notid' component={NoticiasID} />
        <Route exact path='/Estrenos' component={EstrenosDirector} />
        <Route exact path='/Estrenos/:peliculasid' component={Trailer} />
      </Switch>
      <Footbar />
    </BrowserRouter>
  );
}

export default App;
