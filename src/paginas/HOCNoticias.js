import React from 'react';
import Noticias from './Noticias';
import { useAuth0 } from '../react-auth0-spa';
const HOCNoticias = () => {
  const { loading, user } = useAuth0();

  /*if (user) console.log(user);
  else console.log('no hay usuario');*/
  return (
    <React.Fragment>
      <Noticias usuario={user} />
    </React.Fragment>
  );
};

export default HOCNoticias;
