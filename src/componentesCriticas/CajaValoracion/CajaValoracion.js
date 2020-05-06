import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import ValoracionGlobal from './ValoracionGlobal.js';
import ValoracionUsuario from './ValoracionUsuario.js';


const CajaValoracion = (props) => {

  
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return(
    	<div>
    		<h6>Calificación de los usuarios:</h6>
    		<ValoracionGlobal promedio={props.promedio} />
    	</div>
    );
  }
  else {
  	return(
    	<div>
    		<h6>Calificación de los usuarios:</h6>
    		<ValoracionGlobal promedio={props.promedio} />
    		<h6>Calificación personal:</h6>
    		<ValoracionUsuario peliid={props.peliid} userid={user.sub} />
    	</div>
    );
  }
};

export default CajaValoracion;