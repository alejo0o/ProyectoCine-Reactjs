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
  getEstrenosDirector: `query getEstrenosDirector($page:Int!){
    getEstrenosDirector(page:$page){
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
        trailer
        portada
        pernombre
        perapellido
      }
    }
  }`,
  getAnimesporEstreno: `
    query getAnimesporEstreno($page: Int!) {
      getAnimesporEstreno(page:$page){
        info{
          count
          pages
          prev
          next
        }
        results{
          peliculasid
          nombre
          fechadelanzamiento
          duracion
          sinopsis
          portada
        }
      }
    }
  `,

  getPeliculasDirector: `
    query getPeliculaDirector($id:ID!){
    getPeliculaDirector(id:$id){
      peliculasid
      nombre
      sinopsis
      fechadelanzamiento
      trailer
      duracion
      portada
      pernombre
      perapellido
    }
  }
`,
  getBuscarNoticia: `
query getBuscarNoticia($page: Int!, $word:String!) {
  getBuscarNoticia(page:$page, word:$word){
    info{
      count
      pages
      prev
      next
    }
    results{
      notid
      nottitulo
      notimagen
      notfecha
    }
  }
}
`,
  getBuscarPelicula: `
query getBuscarPelicula($page: Int!, $word:String!) {
  getBuscarPelicula(page:$page, word:$word){
    info{
      count
      pages
      prev
      next
    }
    results{
      peliculasid
      nombre
      fechadelanzamiento
      portada
    }
  }
}
`,
};

export default Peticiones;
