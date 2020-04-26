//Consultas y mutaciones para la api de graphql
const Peticiones = {
  createPelicula: `
    mutation AddMovie($input: PeliculaInput!) {
      createPelicula(input: $input) {
        peliculasid
        claid
        nombre
        fechadelanzamiento
        duracion
        sinopsis
        trailer
      }
    }
  `,
  getPeliculas: `
    {
      getPeliculas {
        peliculasid
        nombre
        sinopsis
      }
    }
  `,
  getPelicula: `
    query getMovie($id: ID!) {
      getPelicula(id: $id) {
        claid
        nombre
        fechadelanzamiento
        duracion
        sinopsis
        trailer
        portada
      }
    }
  `,
  editPelicula: `mutation EditMovie($id:ID!,$input:PeliculaEditInput!){
  editPelicula(id:$id,input:$input){
    claid
    nombre
    fechadelanzamiento
    sinopsis
    trailer
    duracion
    portada
  }
}`,
  deletePelicula: `mutation DeleteMovie($id:ID!){
  deletePelicula(id:$id)
}`,
};

export default Peticiones;
