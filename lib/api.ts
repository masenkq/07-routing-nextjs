import axios from 'axios';
import { Note, CreateNoteData, UpdateNoteData } from '@/types/note';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Додайте заголовок авторизації, якщо потрібно
    // 'Authorization': `Bearer ${token}`
  },
});

export const api = {
  // Notes API
  notes: {
    getAll: (tag?: string) => 
      apiClient.get<Note[]>(`/notes`, { params: { tag } }),
    
    getById: (id: string) => 
      apiClient.get<Note>(`/notes/${id}`),
    
    create: (data: CreateNoteData) => 
      apiClient.post<Note>(`/notes`, data),
    
    update: (id: string, data: UpdateNoteData) => 
      apiClient.patch<Note>(`/notes/${id}`, data),
    
    delete: (id: string) => 
      apiClient.delete<void>(`/notes/${id}`),
  },
};