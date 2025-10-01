import axiosClient from './axiosClient';

const getProducts = async () => {
  try {
    const response = await axiosClient.get('/product');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getProducts };
