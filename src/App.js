import React from "react";
//Forms
import FormPeliculas from './Forms/FormPeliculas';
import FormPersonas from './Forms/FormPersonas';
import FormNoticias from './Forms/FormNoticias';
import FormCriticas from './Forms/FormCriticas';
import EditPeli from './Forms/FormEditPeliculas';
import EditNoti from './Forms/FormEditNoticias';
import EditarPersona from "./Forms/FormEditPersonas";
//React Router
import { Switch, BrowserRouter, Route } from 'react-router-dom';




function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/forms/Peliculas' component={FormPeliculas} />
          <Route exact path='/forms/Personas' component={FormPersonas} />
          <Route exact path='/forms/Noticias' component={FormNoticias} />
          <Route exact path='/forms/Criticas' component={FormCriticas} />
          <Route exact path='/forms/:peliId/Edit' component={EditPeli}>
          <Route exact path='/forms/:notiId/EditNoticia' component={EditNoti} /></Route>
          <Route
            exact
            path="/forms/:perid/EditarPersona"
            component={EditarPersona}
          ></Route>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
