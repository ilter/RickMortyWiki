import axios from 'axios';

const API = 'https://rickandmortyapi.com/api/character';

const getCharacters = async () => {
  const response = await axios.get(API);
  return response.data.results;
};

export default getCharacters;
