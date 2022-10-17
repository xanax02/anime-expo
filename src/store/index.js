import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    logIn() {},
    lougout() {},
  },
});

export const authActions = authSlice.actions();

const store = configureStore({
  reducer: { auth: auth.reducer },
});

export default store;
