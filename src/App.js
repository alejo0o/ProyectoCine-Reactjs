import React from 'react';

//Forms
import FormPeliculas from './Forms/FormPeliculas';
import FormPersonas from './Forms/FormPersonas';
import FormNoticias from './Forms/FormNoticias';
//
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/forms/Peliculas' component={FormPeliculas} />
        <Route exact path='/forms/Personas' component={FormPersonas} />
        <Route exact path='/forms/Noticias' component={FormNoticias} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
