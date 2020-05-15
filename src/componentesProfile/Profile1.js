import React from 'react';
import './styles/Profile1.css';
const Profile1 = (props) => {
  return (
    <div className='contenedorProfile'>
      <div className='profile1__header'></div>

      <div className='profile1__section-name'>
        <img
          src={props.picture}
          alt='Avatar'
          className='profile1__avatar'></img>
        <h1>
          {props.name} <br />
        </h1>
      </div>

      <div className='profile1__section-info'>
        <h3>{props.nickname}</h3>
        <div>@{props.email}</div>
      </div>

      <div className='profile1__footer'>#CineLeaders</div>
    </div>
  );
};

export default Profile1;
