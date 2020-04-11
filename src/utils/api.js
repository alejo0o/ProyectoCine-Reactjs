const BASE_URL = 'https://proyectocinegithub.herokuapp.com/api';

/* const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max)); */

async function callApi(endpoint, options = {}) {
  //await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  peliculas: {
    list() {
      //throw new Error('Not found');
      return callApi('/peliculas');
    },
    create(pelicula) {
      //throw new Error('500: Server Error');
      return callApi(`/peliculas`, {
        method: 'POST',
        body: JSON.stringify(pelicula),
      });
    },
    read(peliculaId) {
      return callApi(`/peliculas/${peliculaId}`);
    },
    update(peliculaId, updates) {
      return callApi(`/peliculas/${peliculaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(peliculaId) {
      return callApi(`/peliculas/${peliculaId}`, {
        method: 'DELETE',
      });
    },
  },
  personas: {
    list() {
      return callApi('/personas');
    },
    create(persona) {
      return callApi(`/personas`, {
        method: 'POST',
        body: JSON.stringify(persona),
      });
    },
    read(personaId) {
      return callApi(`/personas/${personaId}`);
    },
    update(personaId, updates) {
      return callApi(`/personas/${personaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(personaId) {
      return callApi(`/personas/${personaId}`, {
        method: 'DELETE',
      });
    },
  },
  noticias: {
    list() {
      return callApi('/noticias');
    },
    create(noticia) {
      return callApi(`/noticias`, {
        method: 'POST',
        body: JSON.stringify(noticia),
      });
    },
    read(noticiaId) {
      return callApi(`/noticias/${noticiaId}`);
    },
    update(noticiaId, updates) {
      return callApi(`/noticias/${noticiaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(noticiaId) {
      return callApi(`/noticias/${noticiaId}`, {
        method: 'DELETE',
      });
    },
  },
  criticas: {
    list() {
      return callApi('/criticas');
    },
    create(critica) {
      return callApi(`/criticas`, {
        method: 'POST',
        body: JSON.stringify(critica),
      });
    },
    read(criticaId) {
      return callApi(`/criticas/${criticaId}`);
    },
    update(criticaId, updates) {
      return callApi(`/criticas/${criticaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(criticaId) {
      return callApi(`/criticas/${criticaId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
