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
getCriticasporPelicula: `
    query getCriticasporPelicula($page: Int!, $id: ID!) {
      getCriticasporPelicula(page: $page, id: $id) {
        crifecha
        email
        critexto
        crivalor
        criid
      }
    }
  `,
  getCriticasUsuarioPelicula: `
    query getCriticasUsuarioPelicula($idMovie: ID!, $idUser: ID!) {
      getCriticasUsuarioPelicula(page: 1, idMovie: $idMovie, idUser: $idUser) {
        criid
        peliculasid
        id
        critexto
        crifecha
        crivalor
      }
    }
  `,
  getCrivalorUsuarioPelicula: `
    query getCrivalorUsuarioPelicula($idMovie: ID!, $idUser: ID!) {
      getCriticasUsuarioPelicula(page: 1, idMovie: $idMovie, idUser: $idUser) {
        crivalor
      }
    }
  `,
  getCriticasPromedioPelicula: `
    query getCriticasPromedioPelicula($id: ID!) {
      getCriticasPromedioPelicula (page: 1, id: $id){
        promedio
        peliculasid
        nombre
        sinopsis
        fechadelanzamiento
        duracion
        portada
        clanombre
      }
    }
  `,
};

export default Peticiones;
