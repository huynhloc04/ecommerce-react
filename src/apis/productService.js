import axiosClient from './axiosClient';

const getProducts = async () => {
  try {
    return await axiosClient.get('/users/search');
  } catch (error) {
    throw error;
  }
};

export { getProducts };
