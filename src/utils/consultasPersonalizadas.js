const Peticiones = {
  getCriticasValor: `query getCriticas($page:Int!){
  getCriticasValor(page:$page){
    info{
      count
      pages
      prev
      next
    }
    results{
      peliculasid
      nombre
    	sinopsis
    	fechadelanzamiento
    	portada
      promedio
    }
  }
}`,
  getNoticiasFecha: `query getNoticiasFecha($page:Int!){
  getNoticiasFecha(page:$page){
    info{
      count
      pages
      prev
      next
    }
    results{
      notid
      nottexto
      nottitulo
      notimagen
      notfecha
    }
  }
}`,
  getCriticasporPelicula: `query getCriticasporPelicula($page:Int!,$id:ID!){
  getCriticasporPelicula(page:$page,id:$id){
    info{
      count
      pages
      prev
      next
    }
    results{
      crifecha
      email
      critexto
      crivalor
      criid
      
    }
  }
}`,
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
