import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

interface SignInPayload {
  username: string;
  password: string;
}

interface SignInResponse {
  access_token: string;
  token_type: string;
}

export const registerUser = createAsyncThunk<LoginResponse, LoginPayload>(
  'users/',
  async (payload) => {
    console.log('Sending data:', payload);
    const response = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/`,
      payload
    );
    console.log('llega hasta aca')
    console.log(response)
    console.log(response.data)
    return response.data;
  }
);

export const loginUser = createAsyncThunk<SignInResponse, SignInPayload>(
  'users/login',
  async (payload) => {
    console.log('Sending data:', payload);

    // Crear un objeto FormData y agregar los campos
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);

    const response = await axios.post<SignInResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/token`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('Response:', response);
    console.log('Response data:', response.data);
    return response.data;
  }
);
