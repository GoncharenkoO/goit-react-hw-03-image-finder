import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '25405867-bdb8a9d921cbc250fb0edc875',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const apiService = async (page = 1, q = '') => {
  const { data } = await instance.get('/', {
    params: {
      page,
      q,
    },
  });
  return data;
};
