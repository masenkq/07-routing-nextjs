import axios from 'axios';
import { Note, CreateNoteData, UpdateNoteData } from '@/types/note';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` })
  },
});

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export const api = {
  notes: {
    getAll: async (tag?: string, search?: string, page?: number, limit?: number): Promise<NotesResponse> => {
      const response = await apiClient.get<NotesResponse>(`/notes`, { 
        params: { tag, search, page, limit } 
      });
      return response.data; // ✅ Повертаємо тільки дані
    },
    
    getById: async (id: string): Promise<Note> => {
      const response = await apiClient.get<Note>(`/notes/${id}`);
      return response.data; // ✅ Повертаємо тільки дані
    },
    
    create: async (data: CreateNoteData): Promise<Note> => {
      const response = await apiClient.post<Note>(`/notes`, data);
      return response.data; // ✅ Повертаємо тільки дані
    },
    
    update: async (id: string, data: UpdateNoteData): Promise<Note> => {
      const response = await apiClient.patch<Note>(`/notes/${id}`, data);
      return response.data; // ✅ Повертаємо тільки дані
    },
    
    delete: async (id: string): Promise<Note> => {
      const response = await apiClient.delete<Note>(`/notes/${id}`);
      return response.data; // ✅ Повертаємо тільки дані
    },
  },
};