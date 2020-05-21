import React from 'react';
import { Link } from 'react-router-dom';

class Error404 extends React.Component{
    render(){
        return <div>        
            <p style={{textAlign:"center"}}>
              <Link to="/">Página no encontrada </Link>
            </p>
          </div>;
    }
}
export default Error404;