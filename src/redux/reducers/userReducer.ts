import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../actions/userActions';

export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string | null;
  disabled: boolean;
}

export interface LoginResponse {
  user: User;
}

export interface SignInResponse {
  access_token: string;
  token_type: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  token_type: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  token_type: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.token_type = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to register';
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<SignInResponse>) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.token_type = action.payload.token_type;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to login';
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
