import { createSlice, configureStore } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false
  },
  reducers: {
    userLogin: state => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    userLogout: state => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
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