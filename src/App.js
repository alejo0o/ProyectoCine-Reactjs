import { BrowserRouter, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-boost";
//ApolloProvider para la conexion con Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import EditPeli from "./Forms/FormEditPeliculas";
import EditarPersona from "./Forms/FormEditPersonas";
import FormCriticas from "./Forms/FormCriticas";
import FormNoticias from "./Forms/FormNoticias";
//Forms
import FormPeliculas from "./Forms/FormPeliculas";
import FormPersonas from "./Forms/FormPersonas";
import React from "react";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8000/api",
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/forms/Peliculas" component={FormPeliculas} />
          <Route exact path="/forms/Personas" component={FormPersonas} />
          <Route exact path="/forms/Noticias" component={FormNoticias} />
          <Route exact path="/forms/Criticas" component={FormCriticas} />
          <Route exact path="/forms/:peliId/Edit" component={EditPeli}></Route>
          <Route
            exact
            path="/forms/:perid/EditarPersona"
            component={EditarPersona}
          ></Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
