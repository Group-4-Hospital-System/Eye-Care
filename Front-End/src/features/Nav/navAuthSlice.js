import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const checkNavAuth = createAsyncThunk("auth/checkAuth", async () => {
  // Check for the presence of an authentication cookie
  const hasAuthCookie = document.cookie
    .split(";")
    .some((item) => item.trim().startsWith("auth="));

  console.log("Auth Cookie Found: ", hasAuthCookie); // Debugging to check if the cookie is being detected
  return hasAuthCookie;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  // Remove the auth cookie
  document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});

const authNavSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkNavAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkNavAuth.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload;
        state.status = "idle";
        console.log("Authentication status updated:", action.payload); // Debugging to verify state update
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export default authNavSlice.reducer;
