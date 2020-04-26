//Consultas y mutaciones para la api de graphql
import { GraphQLClient } from 'graphql-request';
const API_URL = `https://deploy-zeit.now.sh/api`;
const API_HEADERS = {
  headers: {},
};

const Peticiones = {
  ClienteGql: new GraphQLClient(API_URL, API_HEADERS),
  createNoticia: `
    mutation AddNew($input: NoticiaInput!) {
      createNoticia(input: $input) {
        notid
        peliculasid
        nottexto
        notfecha
        nottitulo
        notimagen
      }
    }
  `,
  getNoticias: `
    {
      getNoticias {
        notid
        nottexto
        notfecha
        nottitulo
        notimagen
      }
    }
  `,
  getNoticia: `
    query getNew($id: ID!) {
      getNoticia(id: $id) {
        peliculasid
        nottexto
        notfecha
        nottitulo
        notimagen
      }
    }
  `,
  editNoticia: `mutation EditNew($id:ID!,$input:NoticiaEditInput!)
  {
  editNoticia(id:$id,input:$input){
    peliculasid
    nottexto
    notfecha
    nottitulo
    notimagen
  }
}`,
  deleteNoticia: `mutation DeleteNew($id:ID!){
  deleteNoticia(id:$id)
}`,
};

export default Peticiones;
