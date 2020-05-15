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
import Buscar from './paginas/Buscar';
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
import React from 'react';
//PAGINAS WEB
import history from './utils/history'; //en el causo de uso de router
import { useAuth0 } from './react-auth0-spa';
/////
import HOCNoticias from './paginas/HOCNoticias';
import Profile2 from './paginas/Profile';

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
        <Route exact path='/forms/:criId/EditCritica' component={EditCritica} />

        {/*Rutas a las paginas web*/}
        <Route exact path='/' component={HOCNoticias} />
        <PrivateRoute path='/profile' component={Profile2} />
        <Route exact path='/animes' component={AnimesPagina} />
        <Route exact path='/Noticias' component={DescripcioNoticia} />
        <Route exact path='/criticas' component={CriticasPagina} />
        <Route exact path='/Estrenos' component={EstrenosDirector} />

        <Route
          path='/PeliculaCritica/:peliculasid'
          component={PeliculasCritica}
        />

        <Route path='/Noticias/:notid' component={NoticiasID} />

        <Route exact path='/Estrenos/:peliculasid' component={Trailer} />
        <Route exact path='/Buscar/:word' component={Buscar} />
      </Switch>
      <Footbar />
    </BrowserRouter>
  );
}

export default App;
