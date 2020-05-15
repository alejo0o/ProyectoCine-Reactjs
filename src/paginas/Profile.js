import React from 'react';
import Profile1 from '../componentesProfile/Profile1';
import { useAuth0 } from '../react-auth0-spa';

import './styles/Profile.css';
const Profile = () => {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <div>Por favor, ingrese con sus credenciales...</div>;
  }

  return (
    <React.Fragment>
      <div className='profile__profile1'>
        <div className='row'>
          <div class='col-5'>
            <Profile1
              picture={user.picture}
              nickname={user.nickname}
              name={user.name}
              email={user.email}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
