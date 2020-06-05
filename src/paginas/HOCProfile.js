import React from 'react';
import Profile from './Profile';
import { useAuth0 } from '../react-auth0-spa';
const HOCProfile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Por favor, ingrese con sus credenciales...</div>;
  }
  return (
    <React.Fragment>
      <Profile usuario={user} />
    </React.Fragment>
  );
};

export default HOCProfile;
