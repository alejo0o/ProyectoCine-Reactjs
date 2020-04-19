import React from 'react';

//Forms
import FormPeliculas from './Forms/FormPeliculas';
import FormPersonas from './Forms/FormPersonas';
import FormNoticias from './Forms/FormNoticias';
import FormCriticas from './Forms/FormCriticas';
import EditPeli from './Forms/FormEditPeliculas';
//React Router
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//ApolloProvider para la conexion con Apollo
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/api',
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/forms/Peliculas' component={FormPeliculas} />
          <Route exact path='/forms/Personas' component={FormPersonas} />
          <Route exact path='/forms/Noticias' component={FormNoticias} />
          <Route exact path='/forms/Criticas' component={FormCriticas} />
          <Route exact path='/forms/:peliId/Edit' component={EditPeli}></Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
