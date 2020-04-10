import React from 'react';
import FormPeliculas from './FormPeliculas';
import FormPersonas from './FormPersonas'
import FormNoticias from './FormNoticias'

function App() {
  return (
    <div className='container'>
      <FormPeliculas></FormPeliculas>
      <FormPersonas></FormPersonas>
      <FormNoticias></FormNoticias>
    </div>
  );
}

export default App;
