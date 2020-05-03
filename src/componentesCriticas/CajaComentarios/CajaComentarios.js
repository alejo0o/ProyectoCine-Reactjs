import React, { Component } from 'react';
import NuevoComentario from './NuevoComentario.js';
import Comentarios from './Comentarios.js';

class CajaComentarios extends Component {
	constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }
    liftState = state => {
        this.setState(state);
    }
	
	render() {
		return (
		  	<div>
			  <NuevoComentario peliid={this.props.peliid} />
			  <Comentarios peliid={this.props.peliid} />
			</div>
		  );
	}

}



export default CajaComentarios;