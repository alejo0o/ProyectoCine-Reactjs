import React from 'react';
//Forms
import FormPeliculas from './Forms/FormPeliculas';
import FormPersonas from './Forms/FormPersonas';
import FormNoticias from './Forms/FormNoticias';
import FormCriticas from './Forms/FormCriticas';
import EditPelicula from './Forms/FormEditPeliculas';
import EditNoticia from './Forms/FormEditNoticias';
import EditarPersona from './Forms/FormEditPersonas';
import EditCritica from './Forms/FormEditCriticas';
//React Router
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//AUTENTICACION
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import Profile from './components/Profile';
import history from './utils/history'; //en el causo de uso de router
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <NavBar />
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
        <Route path='/profile' component={Profile} />

        <Route exact path='/forms/:criId/EditCritica' component={EditCritica} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;