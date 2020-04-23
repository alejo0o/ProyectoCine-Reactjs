//Consultas y mutaciones para la api de graphql

import { GraphQLClient } from 'graphql-request';

const API_URL = `https://deploy-zeit.now.sh/api`;

const API_HEADERS = {
  headers: {},
};

const Peticiones = {
  ClienteGql: new GraphQLClient(API_URL, API_HEADERS),
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
  }
}`,
  deletePelicula: `mutation DeleteMovie($id:ID!){
  deletePelicula(id:$id)
}`,
};

export default Peticiones;
