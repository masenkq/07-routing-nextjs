import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const api = {
  // Notes API
  notes: {
    getAll: (tag?: string) => axios.get(`${API_BASE_URL}/notes`, { params: { tag } }),
    getById: (id: string) => axios.get(`${API_BASE_URL}/notes/${id}`),
    create: (data: any) => axios.post(`${API_BASE_URL}/notes`, data),
    update: (id: string, data: any) => axios.put(`${API_BASE_URL}/notes/${id}`, data),
    delete: (id: string) => axios.delete(`${API_BASE_URL}/notes/${id}`),
  },
};
