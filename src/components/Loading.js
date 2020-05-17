import React from 'react';
import './styles/Loading.css';
const Loading = () => {
  return (
    <div className='contenedorLoading'>
      <div className='lds-grid'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
