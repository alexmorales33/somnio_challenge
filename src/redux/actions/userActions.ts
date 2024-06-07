import { User } from '@/types/userTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
  
const API_URL = process.env.API_URL

export const getAllUsers = createAsyncThunk<User[]>('users/getAll', async () => {
    const response = await axios.get<User[]>(`${API_URL}/users`)
    return response.data
})
  