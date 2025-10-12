import axiosClient from './axiosClient';

const register = async payload => {
  try {
    return await axiosClient.post('/auth/register', payload);
  } catch (error) {
    throw error;
  }
};

const login = async payload => {
  try {
    return await axiosClient.post('/auth/login', payload);
  } catch (error) {
    throw error;
  }
};

export { register, login };
