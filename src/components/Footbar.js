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
	  	<div className="contenedorBarrafoot">
		    <div className="barrafoot">
		    	<table className="footIconTable">
		    	<tbody>
		    		<tr>
		    			<td className="footicon">
		    				<a className="footLink" target="_blank">
		    					<i className="fab fa-facebook"></i>
		    				</a>
		    			</td>
		    			<td className="footicon">
		    				<a className="footLink" target="_blank">
		    					<i className="fab fa-twitter"></i>
		    				</a>
		    			</td>
		    			<td className="footicon">
		    				<a className="footLink" target="_blank">
		    					<i className="fab fa-youtube"></i>
		    				</a>
		    			</td>
		    			<td className="footicon">
		    				<a className="footLink" target="_blank">
		    					<i className="fab fa-instagram"></i>
		    				</a>
		    			</td>
		    			<td className="footicon">
		    				<a className="footLink" target="_blank">
		    					<i className="fab fa-google-plus-g"></i>
		    				</a>
		    			</td>
		    			<td className="footicon">
		    				<a className="footLink" target="_blank">
		    					<i className="fab fa-spotify"></i>
		    				</a>
		    			</td>
		    		</tr>
		    	</tbody>
		    	</table>

		    	<div className="footLinea1">
			    	<table className="footItemTable">
			    	<tbody>
			    		<tr>
				    		<td className="footitem">
				    			<ul className="footLinkList">
				    				<li>
				    					<h6 className="footTitle">Github</h6>
				    				</li>
				    				<li>
				    					<a className="footLink" href="https://github.com/alejo0o/ProyectoCine-Reactjs" target="_blank">Frontend</a>
				    				</li>
				    				<li>
				    					<a className="footLink" href="https://github.com/alejo0o/ProyectoCine" target="_blank">Backend</a>
				    				</li>
				    				<li>
				    					<a className="footLink" href="https://github.com/alejo0o/deployZeit" target="_blank">Servicio REST API</a>
				    				</li>
				    			</ul>
				    		</td>
				    		<td className="footitem">
				    			<ul className="footLinkList">
				    				<li>
				    					<h6 className="footTitle">Servicios</h6>
				    				</li>
					    			<li>
				    					<a className="footLink" href="https://deploy-zeit.now.sh/api" target="_blank">REST Api</a>
				    				</li>
				    			</ul>
			    			</td>
			    		</tr>
			    	</tbody>
			    	</table>
		    	</div>


		    	<div className="footInfo">
		    		<table className="footInfoTable">
		    		<tbody>
		    			<tr>
		    				<td>
		    					Desarrollado por Grupo ABAT
		    				</td>
		    				<td className="infoDerecha">
		    					Telefono: +593 01 234 5678
		    				</td>
		    			</tr>
		    		</tbody>
			    	</table>
		    	</div>

		    	
		      
		    </div>
		</div>
	  );
	}
}

export default Footbar;
