import React, { Component } from 'react';
import './styles/Footbar.scss';

//Versión 1 del navbar
class Footbar extends Component {
/*
  	onScroll = (e) =>  {
  		console.log("nigga");
	  	const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
	    if (bottom) {
	      console.log("At The Bottom"); //Add in what you want here
	    }
	}	
*/
	render() {
	  return (
	    <div className="barra">
	    	<table>
	    	<tbody>
	    		<tr>
	    			<td className="footitem">
	    				<a className="link" href="https://deploy-zeit.now.sh/api" target="_blank">
	    					Servicio REST Api
	    				</a>
	    			</td>
	    			<td className="footitem">
	    				<a className="link" href="https://github.com/alejo0o/ProyectoCine-Reactjs" target="_blank">
	    					Frontend en Github
	    				</a>
	    			</td>
	    			<td className="footitem">
	    				<a className="link" href="https://github.com/alejo0o/ProyectoCine" target="_blank">
	    					Backend en Github
	    				</a>
	    			</td>

	    		</tr>
	    	</tbody>
	    	</table>
	      
	    </div>
	  );
	}
}

export default Footbar;
