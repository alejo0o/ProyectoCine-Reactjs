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
<<<<<<< HEAD
  getUsuarioporID: `query getUsuario($id:ID!){
  getUsuarioporID(id:$id){
    id
    nickname
    name
    picture  
    email
    sub
  }
}`,
  crearUsuario: `mutation crearUser($input:UsuarioInput!){
  createUsuario(input:$input){
    id
    nickname
    name
    picture  
    email
    sub
  }
}`,
  editUsuario: `mutation EditUser($id:ID!,$input:UsuarioEditInput!){
  editUsuario(id:$id, input:$input){
		id
    nickname
    name
    picture  
    email
    sub
  }
}`,
  eliminarUsuario: `
  mutation deleteUser($id:ID!){
  deleteUsuario(id:$id)
}`,
  getUsuarioporSub: `query getUsuarioSub($sub:String!){
  getUsuarioporSub(sub:$sub){
    id
    nickname
    name
    picture
    email
    sub
  }
}`,
=======
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
>>>>>>> 17bd10f28ed89af5a220bc1e94998ba30b378cbf
};

export default Peticiones;
