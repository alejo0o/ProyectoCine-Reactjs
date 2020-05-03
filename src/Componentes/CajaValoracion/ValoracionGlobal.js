import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';

class ValoracionGlobal extends Component {
	render() {
		return (
		  	<div>
			  <Rating 
			  name="crivalor" 
			  className="estrellas" 
			  value={parseFloat(this.props.promedio)} 
			  precision={0.5}
			  size="large"
			  readOnly
			  />
			</div>
		  );
	}

}



export default ValoracionGlobal;