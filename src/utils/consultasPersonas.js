//Consultas y mutaciones para la api de graphql

import { GraphQLClient } from "graphql-request";

const API_URL = `http://localhost:8000/api`;
const API_HEADERS = {
  headers: {},
};

const Peticiones = {
  ClienteGql: new GraphQLClient(API_URL, API_HEADERS),
  createPersona: `
    mutation AddPerson($input: PersonaInput!) {
      createPersona(input: $input) {
        perid
        paiid
        pernombre
        perapellido
        perfechanacim
        perlugarnacim
      }
    }
  `,
  getPersonas: `
    {
      getPersonas {
        perid
        pernombre
        perapellido
      }
    }
  `,
  getPersona: `
    query getPerson($id: ID!) {
      getPersona(id: $id) {
        paiid
        pernombre
        perapellido
        perfechanacim
        perlugarnacim
      }
    }
  `,
  editPersona: `mutation EditPerson($id:ID!,$input:PersonaEditInput!){
  editPersona(id:$id,input:$input){
    paiid
    pernombre
    perapellido
    perfechanacim
    perlugarnacim
  }
}`,
  deletePersona: `mutation DeletePerson($id:ID!){
  deletePersona(id:$id)
}`,
};

export default Peticiones;
