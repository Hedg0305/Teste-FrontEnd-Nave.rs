import axios from 'axios';

import { getToken } from './auth';

export const api = axios.create({
  baseURL: 'https:navedex-api.herokuapp.com/v1/',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signIn = async (data) => {
  return await api.post('users/login', data);
};

export const signUp = async (data) => {
  return await api.post('users/signup', data);
};

export const postNaver = async (data) => {
  return await api.post('navers', data);
};

export const loadNavers = async () => {
  return await api.get('navers');
};

export const deletNaver = (id) => {
  return api.delete(`navers/${id}`);
};

export const updateNaver = async (id, data) => {
  return await api.put(`navers/${id}`, data);
};

export const showNaver = async (id) => {
  return await api.get(`/navers/${id}`);
};
