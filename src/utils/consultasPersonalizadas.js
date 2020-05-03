const Peticiones = {
  getPeliculasEstreno: `query getCriticas($page:Int!){
  getCriticasValor(page:$page){
    peliculasid
    nombre
    sinopsis
    fechadelanzamiento
    portada
    promedio
  }
}`,
};

export default Peticiones;
