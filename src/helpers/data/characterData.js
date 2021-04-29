import axios from 'axios';
import firebaseConfig from '../apiKeys';

const getCharacter = () => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.apiKey}` } };
  axios.get('https://the-one-api.dev/v2/character?limit=100', config)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

const getMovies = () => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.apiKey}` } };
  axios.get('https://the-one-api.dev/v2/movie', config)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

const getBooks = () => new Promise((resolve, reject) => {
  axios.get('https://the-one-api.dev/v2/book')
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

const getChapters = (id) => new Promise((resolve, reject) => {
  axios.get(`https://the-one-api.dev/v2/book/${id}/chapter`)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

const getQuotes = (id) => new Promise((resolve, reject) => {
  const config = { headers: { Authorization: `Bearer ${firebaseConfig.apiKey}` } };
  axios.get(`https://the-one-api.dev/v2/character/${id}/quote`, config)
    .then((response) => resolve(response.data.docs))
    .catch((error) => reject(error));
});

export {
  getCharacter, getMovies, getBooks, getChapters, getQuotes
};
