import React from 'react';
import Noticias from './Noticias';
import { useAuth0 } from '../react-auth0-spa';

const HOCNoticias = () => {
  const { user } = useAuth0();

  return (
    <React.Fragment>
      <Noticias usuario={user} />
    </React.Fragment>
  );
};

export default HOCNoticias;
