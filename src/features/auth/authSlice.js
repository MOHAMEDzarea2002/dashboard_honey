import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from './authTThunk'
const initialState = {
  user: {},
  isAuthenticated: false,
  authLoading: true,
  error: null,
  idToken: null
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setUser(state, action) {
      state.user = action.payload,
        state.authLoading = false,
        state.isAuthenticated = true
      state.error = null;

    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.authLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.authLoading = true
      state.isAuthenticated = false
      state.error = null
    }).addCase(authLogin.fulfilled, (state) => {
      state.authLoading = false


    }).addCase(authLogin.rejected, (state, action) => {
      state.authLoading = false
      state.error = action.payload
    })
  }
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
