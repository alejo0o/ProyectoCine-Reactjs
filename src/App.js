//React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EditCritica from "./Forms/FormEditCriticas";
import EditNoticia from "./Forms/FormEditNoticias";
import EditPelicula from "./Forms/FormEditPeliculas";
import EditarPersona from "./Forms/FormEditPersonas";
import FormCriticas from "./Forms/FormCriticas";
import FormNoticias from "./Forms/FormNoticias";
//Forms
import FormPeliculas from "./Forms/FormPeliculas";
import FormPersonas from "./Forms/FormPersonas";
//AUTENTICACION
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import React from "react";
//PAGINAS WEB
import VideosT from "./paginas/Trailers";
import history from "./utils/history"; //en el causo de uso de router
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/forms/Peliculas" component={FormPeliculas} />
        <Route exact path="/forms/Personas" component={FormPersonas} />
        <Route exact path="/forms/Noticias" component={FormNoticias} />
        <Route exact path="/forms/Criticas" component={FormCriticas} />

        <Route exact path="/forms/Videos" component={VideosT} />
        <Route
          exact
          path="/forms/:peliId/EditPelicula"
          component={EditPelicula}
        />
        <Route
          exact
          path="/forms/:notiId/EditNoticia"
          component={EditNoticia}
        />

        <Route
          exact
          path="/forms/:perid/EditarPersona"
          component={EditarPersona}
        />
        <Route path="/profile" component={Profile} />

        <Route exact path="/forms/:criId/EditCritica" component={EditCritica} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
