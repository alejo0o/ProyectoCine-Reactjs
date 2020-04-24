//Consultas y mutaciones para la api de graphql

import { GraphQLClient } from 'graphql-request';

const API_URL = `https://deploy-zeit.now.sh/api`;

const API_HEADERS = {
  headers: {},
};

const Peticiones = {
  ClienteGql: new GraphQLClient(API_URL, API_HEADERS),
  createCritica: `
    mutation AddCritic($input: CriticaInput!) {
      createCritica(input: $input) {
        criid
        peliculasid
        id
        critexto
        crifecha
        crivalor
      }
    }
  `,
  getCriticas: `
    {
      getCriticas {
        criid
        critexto
      }
    }
  `,
  getCritica: `
    query getCritica($id: ID!) {
      getCritica(id: $id) {
        peliculasid
        id
        critexto
        crifecha
        crivalor
      }
    }
  `,
  editCritica: `mutation EditCritic($id:ID!,$input:CriticaEditInput!){
  editCritica(id:$id,input:$input){
    peliculasid
    id
    critexto
    crifecha
    crivalor
  }
}`,
  deleteCritica: `mutation DeleteCritic($id:ID!){
  deleteCritica(id:$id)
}`,
};

export default Peticiones;
