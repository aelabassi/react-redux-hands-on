import { createSlice } from "@reduxjs/toolkit";

const initAuthState = { isAuthenticated: false };

const authSlicer = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlicer.reducer;
export const authActions = authSlicer.actions;
