import axios from 'axios';

export const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=25405867-bdb8a9d921cbc250fb0edc875&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export { apiService as default };
