//Consultas y mutaciones para la api de graphql
const Peticiones = {
  getNoticiasFecha: `
    query getNew($page: Int!) {
      getNoticiasFecha(page: $page) {
        notid
        nottexto
        nottitulo
        notimagen
      }
    }
  `,
  getPeliculasporEstreno: `
    query getNew($page: Int!) {
      getPeliculasporEstreno(page: $page) {
        peliculasid
        nombre
        sinopsis 
        trailer
      }
    }
  `,
};

export default Peticiones;
