const Peticiones = {
  getPeliculasEstreno: `query getCriticas($page:Int!){
  getCriticasValor(page:$page){
    peliculasid
    nombre
    sinopsis
    fechadelanzamiento
    portada
    promedio
  }
}`,
  getNoticiasFecha: `query getNoticias($page:Int!){
  getNoticiasFecha(page:$page){
    notid
        nottexto
        nottitulo
        notimagen
        notfecha
  }
}`,
};

export default Peticiones;
