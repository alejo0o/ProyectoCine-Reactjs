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
//Components
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
//React Router
import { Switch, BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="App">
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </Router>
      </div>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/forms/Peliculas' component={FormPeliculas} />
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

          <Route
            exact
            path='/forms/:criId/EditCritica'
            component={EditCritica}
          />
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
