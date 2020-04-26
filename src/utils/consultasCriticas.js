//Consultas y mutaciones para la api de graphql
const Peticiones = {
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
