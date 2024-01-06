import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state: any, action: any) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state: any) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export const selectIsAuthenticated = (state: any) => state.user.isAuthenticated;

export default userSlice.reducer;