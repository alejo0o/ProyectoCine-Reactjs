//Consultas y mutaciones para la api de graphql
const Peticiones = {
  createNoticia: `
    mutation AddNew($input: NoticiaInput!) {
      createNoticia(input: $input) {
        notid
        peliculasid
        nottexto
        notfecha
      }
    }
  `,
  getNoticias: `
    {
      getNoticias {
        notid
        nottexto
        notfecha
      }
    }
  `,
  getNoticia: `
    query getNew($id: ID!) {
      getNoticia(id: $id) {
        peliculasid
        nottexto
        notfecha
      }
    }
  `,
  editNoticia: `mutation EditNew($id:ID!,$input:NoticiaEditInput!)
  {
  editNoticia(id:$id,input:$input){
    peliculasid
    nottexto
    notfecha
  }
}`,
  deleteNoticia: `mutation DeleteNew($id:ID!){
  deleteNoticia(id:$id)
}`,
};

export default Peticiones;
