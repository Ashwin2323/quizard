import { createSlice, configureStore } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
    userId: localStorage.getItem("userId") || null
  },
  reducers: {
    userLogin: (state,action) => {
      state.isAuthenticated = true;
      state.userId = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userId", action.payload); 
    },
    userLogout: state => {
      state.isAuthenticated = false;
      state.userId = null;
      localStorage.setItem("isAuthenticated", "false");
      localStorage.removeItem("userId");
    }
  }
})

export const { userLogin, userLogout } = authSlice.actions

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer
  }
})

export default store; 